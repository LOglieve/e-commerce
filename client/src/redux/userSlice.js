const userInitState = {
    logged_in: false,
    user_id: null,
    user_email: null,
    user_fName: null,
    user_lName: null,
}

//Action creators
export const userLogin = (userId, user_fName, user_lName) => {
    return{
        type: 'user/login',
        payload: {userId, user_fName, user_lName}

    }

}

export const userLogout = () => {
    return{
        type: 'user/logout'
    }

}



export function userReducer(state = userInitState, action) {
    switch(action.type){
        case 'LOGIN':
            return {...state,
                logged_in: true,
                user_id: action.payload.id,
                user_email: action.payload.email,
                user_fName: action.payload.fName,
                user_lName: action.payload.lName
            }
        case 'LOGOUT':
            return state.logged_in = false;
        default: return state;
    }

}
