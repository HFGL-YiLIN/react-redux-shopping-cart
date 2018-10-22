import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS } from '../actions/cartActions';

const cartReducer = (state = [], action = {}) => {

    const findProductIndex = (products, productId) => products.findIndex(p => p.id === productId);
    
    switch (action.type) {

        case ADD_TO_CART:
            const addIndex = findProductIndex(state, action.payload.id);
            if (addIndex !== -1) {
                state[addIndex].units += 1;
                return state.concat([]);
            }
            return state.concat(action.payload);

        case DELETE_FROM_CART:
            const deleteIndex = findProductIndex(state, action.payload.id);
            return [...state.slice(0, deleteIndex), ...state.slice(deleteIndex + 1)];

        case UPDATE_ITEM_UNITS:
            const updateIndex = findProductIndex(state, action.payload.id);
            if(state[updateIndex].units === 1) {
                return [...state.slice(0, updateIndex), ...state.slice(updateIndex + 1)]; 
            }

            if (state[updateIndex].units === 0 && action.payload.units === -1) {
                break;
            }
            state[updateIndex].units += action.payload.units;
            return state.concat([]);

    }
 
    return state;
};

export default cartReducer; 