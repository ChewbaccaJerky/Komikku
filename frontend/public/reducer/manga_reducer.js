import { RECEIVE_MANGAS, RECEIVE_MANGA } from '../action/manga_action';
import { merge } from 'lodash';

const MangaReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_MANGAS:
            return merge({}, {mangas: action.mangas, page: action.page});

        case RECEIVE_MANGA:
            let newState = merge({}, oldState);
            newState[action.manga.alias] = action.manga;
            return newState;

        default:
            return oldState;
    }

};

export default MangaReducer;