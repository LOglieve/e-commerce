import React, {useState} from 'react';
import { useSelector, connect } from "react-redux";
import { useHistory } from "react-router-dom";




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

                    


                }else{
                    setMessage('Invalid Credentials');
                }
                
                    
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