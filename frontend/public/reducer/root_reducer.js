import entities from './entities_reducer';

import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    entities
});

export default RootReducer;