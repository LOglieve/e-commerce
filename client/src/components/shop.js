import React, {useState, useEffect} from 'react';
import Product from './product'

export default function Shop(props) {
    const [products, setProducts] = useState({});

    const getProducts = async() =>{
        try{
            fetch('./products').then(response => {
                response.json().then(response => {
                    setProducts(response);
                    console.log(products);
                });

            });
        }catch(error){

        }

    }

    useEffect(() =>{
        getProducts();

    }, []);




    return(
        <div>
            <h1>{props.category}</h1>
            

            



        </div>
    )

}