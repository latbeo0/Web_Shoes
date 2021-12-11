import { combineReducers } from 'redux';
import auth from './authReducer';
import product from './productReducer';
import cart from './cartReducer';
import order from './orderReducer';

const rootReducer = combineReducers({
    auth,
    product,
    cart,
    order,
});

export default rootReducer;
