import configureStore from './store/store';
import Root from './component/root';
/* TESTING ONLY */
import * as SessionAPI from './util/session_api_util';
import * as MangaAPI from './util/manga_api_util';
import * as SessionAction from './action/session_action';

import React from 'react';
import ReactDOM from 'react-dom';




document.addEventListener('DOMContentLoaded', ()=>{

    const root = document.querySelector('#root');
    const store = configureStore();

    window.store = store;
    window.dispatch = store.dispatch;
    window.SessionAction = SessionAction;
    
    ReactDOM.render(<Root store={store}/>, root);
    
});