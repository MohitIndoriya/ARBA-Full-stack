import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import authReducer from '../Reducers/auth.reducer';
import productReducer from '../Reducers/product.reducer';
import CategoryReducer from '../Reducers/category.reducer';
import cartReducer from '../Reducers/cart.reducer';



let root = combineReducers({
    auth: authReducer,
    product: productReducer,
    category: CategoryReducer,
    cart: cartReducer
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);