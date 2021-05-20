import React from 'react';
import {Link} from 'react-router-dom';



export default function Nav() {
    const loggedIn = false;
    return(
        <div className = "nav-bar">

            <img id = "logo" alt = "logo"/>
            <h1 id = "company-name">e-commerce</h1>

            <div id = "navButtons">
               
            </div>
            <Link to = "/shop"><button>Shop</button></Link>
                <Link to = "/contact"><button>Contact Us</button></Link>

            <div>

                {
                    (loggedIn == false) ? <div><Link to = "/login"><button>Login</button></Link>
                    <Link to = "/register"><button>Register</button></Link></div> : ""
                }
                

                <input type = "text" placeholder = "search"/>
                <input type = "submit" />

            </div>
                

        
            <button id = "basket">Basket</button>

        </div>
    )

}