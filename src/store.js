import {createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './containers/reducers';

const composeWithEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const Store = createStore(rootReducer,{ },composeWithEnhancers(applyMiddleware(reduxThunk)));

// compose(applyMiddleware(reduxThunk))
export default Store;