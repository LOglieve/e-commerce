//basket

export const basketAdd = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }

}
export const basketRemove = (item, removeAll) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {itemId: item, removeAll: removeAll}
    }
}
export const basketEmpty = () => {
    return {
        type: 'EMPTY_BASKET'
    }
    
}
