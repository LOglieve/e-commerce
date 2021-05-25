const basketInitState = {
    items: [],
    total: 0
}

export const basketAdd = (item) => {
    return {
        type: 'basket/add',
        payload: item
    }

}
export const basketRemove = (item) => {
    return {
        type: 'basket/remove',
        payload: item
    }
}
export const basketEmpty = () => {
    return {
        type: 'basket/empty'
    }
    
}

export function basketReducer(state = basketInitState, action){
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