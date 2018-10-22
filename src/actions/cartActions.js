export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_UNITS = 'UPDATE_ITEM_UNITS';

export const addToCart = ({id, title, description, price, units=1}) => ({
        type: ADD_TO_CART,
        payload: {id, title, description, price, units}
}); 

export const deleteFromCart = ({id}) => ({
        type: DELETE_FROM_CART,
        payload: {id}
}); 

export const updateItemUnits = ({id, units}) => ({
        type: UPDATE_ITEM_UNITS,
        payload: {id, units}
}); 