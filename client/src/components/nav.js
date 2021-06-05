import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom";



export default function Nav() {
    
    const loggedIn = useSelector(state => state.user.logged_in);
    const userId = useSelector(state => state.user.user_id);
    const [searchText, setSearchText] = useState('');
    let history = useHistory();
    

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchText !== ''){
            const url = `/search/${searchText}`;
            history.push(url);
        }

    }

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        console.log(searchText);
        
    }

    return(
        <div className = "navbar navbar-dark bg-red">
            
            <img src = {require("../resources/logo.png")?.default} id = "logo" alt = "logo"/>
            <Link to = "/shop"><h1 className = "navbar-text" id = "company-name">e-commerce</h1></Link>

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
                    
                <div id = 'search-bar' className = "input-group mb-3">
                    <div className = "input-group-prepend">
                        <lable className = "input-group-text" for = 'search-bar'>Search</lable>
                    
                    </div>

                        <input className = "form-control" name = 'search-bar' type = "text" value = {searchText} onChange = {handleSearchChange}/>

                    <div class="input-group-append">
                        <button className = "form-control" type = "submit" onClick = {handleSearch}>Go</button>
                    </div>
                    
                    
                </div>
                
                

            </div>
                    
            <Link to = "/basket"><button className = "navbar-toggler" id = "basket">Basket</button></Link>

            
            
        </div>
    )

}

