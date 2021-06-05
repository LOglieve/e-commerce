import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Product from './product';

export default function Search(props){
    const [products, setProducts] = useState([]);
    const {searchText} = useParams();
    console.log(searchText);

    const getProducts = async() => {
        const searchURL = `/search/${searchText}`;
            fetch(searchURL).then(response => {
                response.json().then(data =>{
                    setProducts(data);
                })
            });
    }

    useEffect(() =>{
        getProducts();

    }, [searchText]);


    return(
        <div className = "container mt-3">


            <div>

            {
                (products != null) ? products.map((product, index) => <Product key = {index} productData = {product}/>) : <h1>Unable to load products</h1> 
            }
            
            </div>

        </div>
    )
    
}