import React from 'react';
import { useSelector } from "react-redux";
import BasketItem from './basketItem'

export default function Basket() {
    const basketItems = useSelector(state => state.basket.items);

    console.log(basketItems);

    return(
        <div className = "">

            {
                (basketItems != null) ? basketItems.map((item, index) => <BasketItem key = {index} itemId = {item}/>) : <h1>Unable to load products</h1> 
            }

            



        </div>
    )

}