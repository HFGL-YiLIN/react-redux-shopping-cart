import { combineReducers } from 'redux';
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    blacklist: ['products'] // initial states from productsReducer can be updated
   };

   export const pReducer = persistReducer(persistConfig, rootReducer);