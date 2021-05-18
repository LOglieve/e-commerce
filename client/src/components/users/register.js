import React from 'react';

export default function Register() {
    return(
        <div className = "register">
            <form>
                <label for = "email">Email</label>
                <input name = "email" type = "text"></input>
                <label for = "reEmail">Re-type Email</label>
                <input name = "reEmail" type = "text"></input>

                <label for = "password">Password</label>
                <input name = "password" type = "password"></input>
                <label for = "rePassword"> Re-type Password</label>
                <input name = "rePassword" type = "password"></input>

                <input type = "submit"></input>
            </form>

        </div>
    )

}