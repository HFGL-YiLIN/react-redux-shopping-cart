import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { pReducer } from '../reducers/rootReducer';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
//     blacklist: ['products'] // initial states from productsReducer can be updated
//    };

//    const pReducer = persistReducer(persistConfig, rootReducer);

// store
const middleware = applyMiddleware(logger);
export const store = createStore(pReducer, middleware);
export const persistor = persistStore(store);

// export default store; 