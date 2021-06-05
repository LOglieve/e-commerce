import React, {useState} from 'react';
import {validate} from './services/validation';
import { useHistory } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState({email: '', checkEmail: ''});
    const [password, setPassword] = useState({pass: '', checkPass: ''});
    const [message, setMessage] = useState('');

    let history = useHistory();

    const handleEmailChange = (e) => {
        if(e.target.name === 'email'){
            setEmail({...email, email: e.target.value})
            //console.log(email);
        }else{
            setEmail({...email, checkEmail: e.target.value})
            //console.log(email);
        }

    }

    const handlePassChange = (e) => {
        if(e.target.name === 'password'){
            setPassword({...password, pass: e.target.value})
            //console.log(password);
        }else{
            setPassword({...password, checkPass: e.target.value})
            //console.log(password);
        }
      
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const valid = validate(email, password);
        const userE = email.email;
        const userP = password.pass;
        console.log(userE, userP);
        console.log(valid);
        if(valid){
            setMessage('');
            const body = {email: userE, password: userP};
            fetch('./createuser', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            }).then(response =>{
                console.log('benis');
                console.log(response);
                if(response.status === 201){
                    response.json().then(data =>{
                        console.log(data);
                        history.push("/login");
                    })
                }else{
                    setMessage("Invalid credentials");
                }
                
                
            })


        }else{
            setMessage("Invalid credentials");
        }


    }

    return(
        <div className = "register">
            <h1>{message}</h1>
            <form onSubmit = {handleSubmit}>
                <label for = "email">Email</label>
                <input name = "email" type = "text" value = {email.email} onChange = {handleEmailChange}></input>
                <label for = "checkEmail">Re-type Email</label>
                <input name = "checkEmail" type = "text" value = {email.checkEmail} onChange = {handleEmailChange}></input>

                <label for = "password">Password</label>
                <input name = "password" type = "password" value = {password.pass} onChange = {handlePassChange}></input>
                <label for = "checkPass"> Re-type Password</label>
                <input name = "checkPass" type = "password" value = {password.checkPass} onChange = {handlePassChange}></input>

                <input type = "submit"></input>
            </form>

        </div>
    )

}