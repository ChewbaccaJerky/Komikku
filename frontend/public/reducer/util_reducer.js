import { merge } from "lodash";

import { RECEIVE_PAGE } from "../action/util_action"; 

const defaultState = {
    page: 0
};

const UtilReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_PAGE:
            return merge({}, action.page);

        default: 
            return oldState;
    }
};

export default UtilReducer;