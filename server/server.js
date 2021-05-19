const express = require('express');
const pool = require('./database/db');
const cors = require("cors");

const app = new express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

//get products

app.get('products', async(req, res) =>{
    try{
		const products = await pool.query("SELECT * FROM products");
		res.json(products);
	}catch(err){
		console.log(err.message);
	}



});

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