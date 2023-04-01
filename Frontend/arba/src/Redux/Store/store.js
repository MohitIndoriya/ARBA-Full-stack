import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import authReducer from '../Reducers/auth.reducer';
import productReducer from '../Reducers/product.reducer';



let root = combineReducers({
    auth: authReducer,
    product: productReducer
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);