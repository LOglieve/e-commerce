import React, {useState, useEffect} from 'react';
import { useSelector, connect } from "react-redux";

function BasketItem(props){
    const [product, setProduct] = useState({});
    //console.log(props.itemId);

    const price = "£" + (product.price / 100).toFixed(2);
    console.log(price);

    const getBasketItem = () => {
        const fetchURL = `../product/${props.itemId[0]}`;
        try{
            fetch(fetchURL).then(response => {
                response.json().then(response => {
                    //console.log(response);
                    setProduct(response[0]);
                    //console.log(product);
                })
            })

        }catch(err){
            console.log(err.message);
        }
    }

    const addExtra = () =>{
        props.dispatch({type: 'ADD_ITEM', payload: product.id});


    }

    const reduceItem = () => {
        props.dispatch({type: 'REMOVE_ITEM', payload: { itemId: product.id, removeAll: false }});
        

    }

    const removeItem = () => {
        props.dispatch({type: 'REMOVE_ITEM', payload: { itemId: product.id, removeAll: true }});
        

    }

    useEffect(() => {
        getBasketItem();

    }, []);


    return(

        
        <div className = "card">
            <h1>{product.product}</h1>
            <h2>Quantity: {props.itemId[1]}</h2>
            <p>Price: {price}</p>
            <button className = 'btn btn-secondary' onClick = {addExtra}>^</button>
            <button className = 'btn btn-secondary' onClick = {reduceItem}>v</button>
            <button className = 'btn btn-secondary' onClick = {removeItem}>Remove</button>

        </div>
    )
}
export default connect()(BasketItem);