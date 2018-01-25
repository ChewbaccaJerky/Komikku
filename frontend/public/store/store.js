import RootReducer from '../reducer/root_reducer';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [logger, thunk];

const configureStore = (preloadedState = {}) => {
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
