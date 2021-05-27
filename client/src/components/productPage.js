import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


export default function ProductPage(props) {
    const {productId} = useParams();
    const [product, setProduct] = useState([])

    const getProduct = async() =>{
        const fetchURL = `../product/${productId}`;
        console.log(fetchURL);
        try{
            fetch(fetchURL).then(response => {
                response.json().then(response => {
                    console.log(response);
                    setProduct(response[0]);
                    console.log(product);
                })
            })
        }catch(err){

        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    


    return (
        <div>
            <h1>{product.product}</h1>

        </div>
    )
}