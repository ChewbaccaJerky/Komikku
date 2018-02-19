import session from './session_reducer';
import mangas from './manga_reducer';
import errors from './session_errors_reducer';
import chapter from './chapter_reducer';

import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
    mangas,
    chapter,
    session,
    errors
});

export default EntitiesReducer;