import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../action/session_action';
import { merge } from 'lodash';

const SessionErrorsReducer = ( state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return [];

        case RECEIVE_SESSION_ERRORS:
            return action.errors;

        default:
            return state;
    }
};

export default SessionErrorsReducer;