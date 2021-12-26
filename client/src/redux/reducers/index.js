import { combineReducers } from 'redux';
import auth from './authReducer';
import product from './productReducer';
import cart from './cartReducer';
import order from './orderReducer';
import location from './locationReducer';

const rootReducer = combineReducers({
    auth,
    product,
    cart,
    order,
    location,
});

export default rootReducer;
