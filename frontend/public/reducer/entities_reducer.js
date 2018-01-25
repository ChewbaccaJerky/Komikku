import session from './session_reducer';
import errors from './session_errors_reducer';

import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
    session,
    errors
});

export default EntitiesReducer;