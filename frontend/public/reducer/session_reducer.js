import { RECEIVE_CURRENT_USER } from '../action/session_action';
import { merge } from 'lodash';

const nullUser = Object.freeze({ currentUser: null });

const SessionReducer = ( state = nullUser, action ) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            let currentUser = action.currentUser;
            return merge({}, { currentUser });
        default:
            return state;
    }
};

export default SessionReducer;


