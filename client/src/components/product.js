import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
    console.log(props.productData);
    const price = props.productData.price;
    return(
        <Link className = "col-3 card" to = {`/product/${props.productData.id}`}>
            <div > 
                <img className = "card-img-top" src = {require("../resources/product_images/" + props.productData.img_id[0] + ".jpg")?.default} width = "100%" />
                <h1>{props.productData.product}</h1>
                <p>{props.productData.description}</p>
                
                <h2>{props.productData.quantity}</h2> <h2>{props.productData.price}</h2>
            
            </div>
        </Link>
        
    )

}