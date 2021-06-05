import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";



export default function Nav() {
    
    const loggedIn = useSelector(state => state.user.logged_in);
    const userId = useSelector(state => state.user.user_id);
    console.log(loggedIn);

    const handleSearch = (e) => {
        e.preventDefault();
    }

    return(
        <div className = "navbar navbar-dark bg-dark">
            
            <img src = {require("../resources/logo.png")?.default} id = "logo" alt = "logo"/>
            <h1 className = "navbar-text" id = "company-name">e-commerce</h1>

            <div id = "navButtons">
                <Link to = "/shop" ><button className = "navbar-toggler">Shop</button></Link>
                <Link to = "/contact"><button className = "navbar-toggler">Contact Us</button></Link>
            </div>
                

            <div>

                {
                    (loggedIn === false) ? 
                    <div>
                        <Link  to = "/login">
                            <button className = "navbar-toggler">Login</button>
                        </Link>
                        <Link to = "/register">
                            <button className = "navbar-toggler">Register</button>
                        </Link>
                    </div> 
                    : 
                    <div>
                        <Link to = {`/profile/${userId}`}><button className = "navbar-toggler">Profile</button></Link>

                    </div>

                }
                    

                <input  type = "text" placeholder = "search"/>
                <input className = "navbar-toggler" type = "submit" />

            </div>
                    
            <Link to = "/basket"><button className = "navbar-toggler" id = "basket">Basket</button></Link>

            
            
        </div>
        // <div className = "nav-bar container-fluid">

            

        // </div>
    )

}

