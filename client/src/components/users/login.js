import React from 'react';

export default function Login() {
    return(
        <div className = "login">
         
         <label for = "email">Email</label>
            <input name = "email" type = "text"></input>
            <label for = "password">Password</label>
            <input name = "password" type = "password"></input>
            
            
            <input type = "submit"></input>

           

        </div>
    )

}