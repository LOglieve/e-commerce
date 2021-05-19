

//REDUCER



const basketInitState = {
    items: [],
    total: 0
}

const userInitState = {
    logged_in: false,
    user_id: null,
    user_fName: null,
    user_lName: null,
}



export const basketReducer = (state = basketInitState, action) =>{
    switch(action.type){
        case 'ADD_ITEM':
            return{
                
            }

        case 'REMOVE_ITEM':

        case 'EMPTY_BASKET':
            return {
                
            };
        default: return state;

    }
}

export const userReducer = (state = userInitState, action) => {
    switch(action.type){
        case 'LOGIN':
            return state.logged_in = true;
        case 'LOGOUT':
            return state.logged_in = false;
        default: return state;
    }

}
