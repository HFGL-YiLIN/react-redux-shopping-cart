import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS} from '../actions/cartActions';

export const cartReducer = (state=[], action={}) => {

    const findProductIndex = (products, prodId) => products.findIndex(p => p.id === prodId); 

    switch(action.type) {

        case ADD_TO_CART:
            let addIndex = findProductIndex(state, action.payload.id);
            if (addIndex !== -1) {
                state[addIndex].units += 1;
                return state.concat([]);
            }
            return state.concat(action.payload);

        case DELETE_FROM_CART:
            let deleteIndex = findProductIndex(state, action.payload.id);
            return [...state.slice(0, deleteIndex), ...state.slice(deleteIndex + 1)];

        case UPDATE_ITEM_UNITS:
            let updateIndex = findProductIndex(state, action.payload.id);
            if (state[updateIndex].units === 1 && action.payload.units === -1) {
                return [...state.slice(0, updateIndex), ...state.slice(updateIndex + 1)]
            }
            state[updateIndex].units += action.payload.units;
            return state.concat([]);

    }

    return state;
}; 
