import React, {useState} from 'react';
import { useSelector, connect } from "react-redux";

//


function Login(props) {
    const loggedIn = useSelector(state => state.user.logged_in);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');



    const login = (email, password) => {
        const fetchURL = './login';
        fetch(fetchURL).then(response => {
            response.json().then(userData => {
                console.log(userData);
            })
        })
        // props.dispatch({type: 'Login', payload: {user_id: id, user_fName}})

    }

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value);
            console.log(email);

        }else if(e.target.name === 'password'){
            setPassword(e.target.value);
            console.log(password);

        }

    }

    const validateEmail = (email) => {
        if(email.length <= 320 && email.length >= 3 && email.includes('@')){
            return true;
        }else{
            return false;
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const valid = validateEmail(email);
        console.log(valid);

        if(valid){
            const body = {email, password};
            fetch('/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            }).then(response => {
                response.json().then(data =>{
                    console.log(data);
                    

                });
            });
        }else{
            setMessage('Invalid Credentials');
        }

    }



    return(
        <div className = "login" >

            {(message != '')? <h1>{message}</h1> : ''}
        
            <form onSubmit = {handleSubmit}>
                <label for = "email">Email</label>
                <input name = "email" type = "text" onChange = {handleChange}></input>
                <label for = "password">Password</label>
                <input name = "password" type = "password" onChange = {handleChange}></input>
                    
                    
                <input type = "submit"></input>

            

            

            </form>
        </div>
         
    )

}
export default connect()(Login);