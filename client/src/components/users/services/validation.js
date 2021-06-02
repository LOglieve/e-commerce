export const validate = (email, password) => {
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if(emailValid && passwordValid){
        return true;
    }else{
        return false;
    }
}

  

const validateEmail = (email) =>{
    if(email.email === email.checkEmail && email.email != ''){
        return true;
    }

}

const validatePassword = (password) => {
    if(password.pass === password.checkPass && password.pass != ''){
        if(password.pass.length >= 8 && password.pass.length <= 28 ){
            return true;
        }
    }

    return false;

}