import React, {useState, useEffect} from 'react';
import Product from './product'

export default function Shop(props) {
    const [products, setProducts] = useState([]);

    const getProducts = async() =>{
        try{
            fetch('./products').then(response => {
                response.json().then(response => {
                    setProducts(response);
                });

            });
        }catch(error){

        }

    }

    useEffect(() =>{
        getProducts();

    }, []);




    return(
        <div className = "container">
            <h1>{props.category}</h1>

            <div className = "row">

            {
                (products != null) ? products.map((product, index) => <Product key = {index} productData = {product}/>) : <h1>Unable to load products</h1> 
            }
            
            </div>

            


            



        </div>
    )

}