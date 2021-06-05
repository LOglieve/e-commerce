const basketInitState = {
    items: [[1, 1], [2, 4], [3, 1]],
    total: 0
}

export function basketReducer(state = basketInitState, action){
    switch(action.type){
        case 'ADD_ITEM':

            let index = null; 
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

            console.log('in');
            //console.log(state.items);


            //copy items array to newArray
            let newRemoveArray = state.items;
            //set default of index
            let removeIndex = null;

            // find index of item to be removed
            for(let i = 0; i < state.items.length; i++){
                if(state.items[i][0] === action.payload.itemId){
                    console.log('sorting');
                    //set index to removal item index
                    removeIndex = i;
                }
            }

            //if all are being removed or only one of the item in basket
            if(action.payload.removeAll === true || newRemoveArray[removeIndex][1] === 1){
                console.log('only one / remove');
                //remove index from new array
                newRemoveArray.splice(removeIndex, 1);

                //return newarray copied into items
                return { ...state,
                items: newRemoveArray }
                
            // if only one of the items being removed
            }else{
                console.log('remove 1');
                //console.log(newRemoveArray);

                newRemoveArray[removeIndex][1]--;

                //console.log(newRemoveArray);
                return { ...state,
                    items: newRemoveArray }


            }
            

        case 'EMPTY_BASKET':
            return {

                
            };
        default: 
            return state;

    }
}