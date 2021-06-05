import React, {useState} from 'react';
import { useSelector, connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";




function Login(props) {
    const loggedIn = useSelector(state => state.user.logged_in);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    let history = useHistory();

 

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
                console.log(response);
                if(response.status === 200){
                    const data = response.json();
                    console.log('egg');
                    props.dispatch({type: 'LOGIN', payload: {
                        id: data.id, 
                        email: data.email, 
                        fName: data.fName, 
                        lName: data.lName
                    }});
                    console.log(loggedIn);
                    history.push("/shop");

                    


                // }else if(response.status === '404'){
                //     setMessage('Email not registered');
                }else{
                    setMessage('Invalid Credentials');
                }
                
                    
            });
        }else{
            setMessage('Invalid Credentials');
        }

    }



    return(
        <div className = "text-center " >

            {(message !== '')? <h1>{message}</h1> : ''}

            <div className = "row">

            </div>
        
            <form className = "form-horizontal mb-4 col-md-4 col-md-offset-4" onSubmit = {handleSubmit}>
                
                <div className = "input-group mb-4">
                    <div className = "input-group-prepend"><label className = "input-group-text" for = "email">Email</label></div>
                    
                    <input className = "form-control" placeholder = "Email Address" name = "email" type = "text" onChange = {handleChange}></input>
                </div>

                <div className = "input-group"> 
                    <div className = "input-group-prepend">
                        <label className = "input-group-text" for = "password">Password</label>
                    </div>
                    <input className = "form-control" placeholder = "Password" name = "password" type = "password" onChange = {handleChange}></input>
                </div>

                
                
                    
                    
                <input className = "btn btn-lg btn-dark btn-block" type = "submit"></input>

            

            

            </form>
            {(message !== '')? <Link to = "./register"><button>Register</button></Link> : ''}
        </div>
         
    )

}
export default connect()(Login);