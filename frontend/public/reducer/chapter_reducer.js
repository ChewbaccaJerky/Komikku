import { RECEIVE_CHAPTER } from "../action/chapter_action";
import { merge } from "lodash";
const defaultState = {
    chapter: {}
};

const ChapterReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_CHAPTER:
            const newState = merge({}, oldState, action.chapter);
            return newState;
            
        default:
            return oldState;
    }
};

export default ChapterReducer;