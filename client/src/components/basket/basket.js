import React, {useEffect} from 'react';
import { useSelector, connect } from "react-redux";

import BasketItem from './basketItem'



function Basket(props) {
    //const basketItems = useSelector(state => state.basket.items);

    console.log(props.basketItems);
    let totalPrice = 0;

    // const getTotal = () =>{
    //     for(let i = 0; i < basketItems.length; i ++){


    //     }
    // }

    useEffect(() =>{
        console.log('basketL: ' + props.basketItems);

    }, [props.basketItems]);

    return(
        <div className = "">

            {
                (props.basketItems != null) ? props.basketItems.map((item, index) => <BasketItem key = {index} itemId = {item}/>) : <h1>Basket Empty</h1> 
            }

            <h1>Total: {totalPrice}</h1>
            



        </div>

    )
}
function mapStateToProps(state){
    console.log('chillin');
    console.log(state.basket.items);
    return{
        
        basketItems: state.basket.items,

    }
}


export default connect(mapStateToProps)(Basket)