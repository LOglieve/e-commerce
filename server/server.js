const express = require('express');
const pool = require('./database/db');
const cors = require("cors");
const bcrypt = require('bcryptjs');
const e = require('express');

const app = new express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const createHash = async(password) => {

    bcrypt.genSalt().then(salt => {
        bcrypt.hash(password, salt).then(hash => {
            console.log(hash);
            return hash;
        })
    });

}

//get products

app.get('/products', async(req, res) =>{
    try{
		const products = await pool.query("SELECT * FROM products");
		//console.log(products.rows);
        res.json(products.rows);
	}catch(err){
		console.log(err.message);
	}



});

app.get('/product/:productId', async(req, res) => {
    const productId = req.params.productId;
    console.log(productId);
    try{
        console.log("in");
        const product = await pool.query("SELECT * FROM products WHERE id = $1", [productId]);
        console.log('out');
		console.log(product.rows);
        res.json(product.rows);
    }catch(err){

    }
})

//register
app.post("/createuser", async(req, res)=> {
    try{
        //extract json body
        const {email, password} = req.body;

        //search for user email
        const checkEmail = await pool.query('SELECT email FROM users WHERE email = $1', [email]);
        //if email not already registered
        if(checkEmail.rows.length === 0){
            //hash and salt password for storage in database
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);

            const newUser =  await pool.query("INSERT INTO users (email, password) VALUES($1, $2) RETURNING *", [email, hash]);
            if(newUser.rows.length != 0){
                res.status('201');

            }else{
                res.status('500');

            }
      
        }else{
            res.status('409').send({error: "email already registered"});
        }

    }catch(err){
        console.error(err.message);
        res.status('500').send({error: err.message});
    }
});

//read user (login)
app.post("/login", async(req, res) =>{
    try{
        const {email, password} = req.body;
        
        //search for email in database
        const checkEmail = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        console.log(checkEmail);
        if(checkEmail.rows.length === 0){
            res.status('404').send({error: 'Invalid Credentials'})
        }else{
            const data = checkEmail.rows[0];
            const hash = data.password;
            const compare = await bcrypt.compare(password, hash);
            if(compare){
                res.status('200').send({userData: {email: data.email, id: data.id}})
            }else{
                res.status('401').send({error: 'Invalid Credentials'})

            }

        }

        


    }catch(err){
        console.error(err.message);
    }
});

//update user

//delete user

//get user orders



app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));


//random stuff
            
            // const hash = createHash(password);
            // console.log(hash);
            // bcrypt.genSalt().then(salt => {
            //     bcrypt.hash(password, salt).then(hash => {
            //         console.log(hash);
                    
                    
            //     })
            // });