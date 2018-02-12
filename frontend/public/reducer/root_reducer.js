import { combineReducers } from 'redux';

import entities from './entities_reducer';
import util from './util_reducer';

const RootReducer = combineReducers({
    entities,
    util
});

export default RootReducer;