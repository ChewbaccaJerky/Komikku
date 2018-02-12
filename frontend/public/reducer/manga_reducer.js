import { RECEIVE_MANGAS, RECEIVE_MANGA } from '../action/manga_action';
import { merge } from 'lodash';

const MangaReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_MANGAS:
            return merge({}, oldState, action.mangas);

        case RECEIVE_MANGA:
            let newState = merge({}, oldState);
            let title = Object.keys(action.manga)[0];
            newState[title] = action.manga[title];
            return newState;

        default:
            return oldState;
    }

};

export default MangaReducer;