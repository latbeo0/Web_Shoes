import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

function DataProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

export default DataProvider;
