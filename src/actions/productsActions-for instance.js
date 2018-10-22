export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const addProduct = ({id, title, description, price}) => ({
        type: ADD_PRODUCT,
        payload: {id, title, description, price}
}); 

export const updateProduct = ({id, title}) => ({
        type: UPDATE_PRODUCT,
        payload: {id, title}
}); 