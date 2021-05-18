import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return(
        <div className = "nav-bar">

            <img id = "logo" alt = "logo"/>
            <h1 id = "company-name">e-commerce</h1>

            <div id = "categories">
                <Link to = "/login"></Link>
                <Link to = "/register"></Link>
                <button>category</button>
                <button>category</button>
                <button>category</button>
            </div>
            
            <button id = "basket">Basket</button>

        </div>
    )

}