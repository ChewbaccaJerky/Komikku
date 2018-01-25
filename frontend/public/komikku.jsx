import configureStore from './store/store';
import Root from './component/root';
/* TESTING ONLY */
import * as SessionAPI from './util/session_api_util';
import * as MangaAPI from './util/manga_api_util';

import React from 'react';
import ReactDOM from 'react-dom';




document.addEventListener('DOMContentLoaded', ()=>{

    const root = document.querySelector('#root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
    
});