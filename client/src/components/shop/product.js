import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, connect } from "react-redux";
import { findNonSerializableValue } from '@reduxjs/toolkit';

function Product(props) {
    //console.log(props.productData);
    const price = '£' + (props.productData.price/100).toFixed(2);
    
    const basket = useSelector(state => state.basket.items);
    


    const addToBasket = () => {

        props.dispatch({type: 'ADD_ITEM', payload: props.productData.id});
        console.log(basket);
        console.log('YEEHA');
        console.log(basket);
    }



    return(
        <div className = "card mb-3">
            <Link to = {`/product/${props.productData.id}`}>
                <div className = "row g-0">

                    <div className = "col-12-md-3 ">
                        <img alt="" className = "thumbnail" src = {require("../../resources/product_images/" + props.productData.img_url[0] + ".jpg")?.default} height = "160px" />
                    </div>

                    <div className = "col-12-md-8">
                        <h1>{props.productData.product}</h1>
                        <p>{props.productData.description}</p>
                        <h2>In Stock: {props.productData.quantity}</h2> <h2>Price: {price}</h2>
                        
                    </div>

                </div>
            
            

            </Link>
            <button className = 'btn btn-secondary'  onClick = {() => addToBasket()}>Add to Basket</button>
        </div>
        
        
    )

}
export default connect()(Product);

// style = {{color: 'white', backgroundColor: 'gray'}}