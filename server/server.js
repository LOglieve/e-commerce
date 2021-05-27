const express = require('express');
const pool = require('./database/db');
const cors = require("cors");

const app = new express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

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

//create user

app.post("/createuser", async(req, res)=> {
    try{
        console.log(req.body);
        const {email, password} = req.body;
        console.log(dOB);

        const newUser = await pool.query("INSERT INTO users (email, password) VALUES($1, $2) RETURNING *", [email, password]);
        
        res.json(newUser.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});

//read user (login)

//update user

//delete user

//get user orders



app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));