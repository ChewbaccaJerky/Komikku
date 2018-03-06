import { merge } from "lodash";

import { RECEIVE_PAGE, SET_CURRENT_CHAPTER, 
         SET_CURRENT_MANGA, CLEAR, 
         DECREMENT_CHAPTER, INCREMENT_CHAPTER } from "../action/util_action"; 

const defaultState = {
    page: 0,
    current_manga: "",
    current_chapter: 0
};

const UtilReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type) {
        case RECEIVE_PAGE:
            newState =  merge({}, oldState);
            newState.page = action.page;
            return newState;

        case CLEAR:
            return defaultState;

        case SET_CURRENT_CHAPTER:
            newState = merge({}, oldState);
            newState.current_chapter = action.current_chapter;
            return newState;

        case SET_CURRENT_MANGA:
            newState = merge({}, oldState);
            newState.current_manga = action.current_manga;
            return newState;

        default: 
            return oldState;
    }
};

export default UtilReducer;