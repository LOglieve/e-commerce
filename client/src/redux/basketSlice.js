import {createReducer} from '@reduxjs/toolkit';

const basketInitState = {
    items: [[1, 1], [2, 4], [3, 1]],
    total: 0
}

export const basketAdd = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }

}
export const basketRemove = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}
export const basketEmpty = () => {
    return {
        type: 'EMPTY_BASKET'
    }
    
}

export function basketReducer(state = basketInitState, action){
    switch(action.type){
        case 'ADD_ITEM':
            console.log(action.payload);

            //const newArray = state.items.filter(item => item[0] === action.payload);
            //const notExist = [action.payload, 1];
            let index = -1;
            let newArray = state.items;
            console.log(state.items);
            console.log(newArray);
            

            for(let i = 0; i < state.items.length; i++){
                if(state.items[i][0] === action.payload){
                    index = i;
                }else{
    
                }
            }

            if(index !== -1){
                newArray[index][1]++;
                return {...state,
                    items: newArray };


            }else{
                return {...state,
                    items: [...state.items, [action.payload, 1]] };
            }

       
        case 'REMOVE_ITEM':
            break;

        case 'EMPTY_BASKET':
            return {

                
            };
        default: 
            return state;

    }
}