import configureStore from './store/store';
import Root from './component/root';
/* TESTING ONLY */
import * as SessionAPI from './util/session_api_util';
import * as MangaAPI from './util/manga_api_util';
import * as ChapterAPI from "./util/chapter_api_util";
import * as SessionAction from './action/session_action';
import * as MangaAction from './action/manga_action';
import * as ChapterAction from "./action/chapter_action";

import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', ()=>{

    const root = document.querySelector('#root');
    const store = configureStore();

    window.store = store;
    window.dispatch = store.dispatch;
    window.SessionAction = SessionAction;
    window.MangaAction = MangaAction;
    window.ChapterAPI = ChapterAPI;
    window.ChapterAction = ChapterAction;

    ReactDOM.render(<Root store={store}/>, root);
    
});