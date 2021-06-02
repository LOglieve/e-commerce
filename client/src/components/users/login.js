import React from 'react';
import { useSelector, connect } from "react-redux";


function Login(props) {
    const loggedIn = useSelector(state => state.user.logged_in);

    const login = (email, password) => {
        const fetchURL = './login';
        fetch(fetchURL).then(response => {
            response.json().then(userData => {
                console.log(userData);
            })
        })
        // props.dispatch({type: 'Login', payload: {user_id: id, user_fName}})

    }

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
export default connect()(Login);