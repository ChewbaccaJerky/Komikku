import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/root';

import * as SessionAPI from './util/session_api_util';
import * as MangaAPI from './util/manga_api_util';

document.addEventListener('DOMContentLoaded', ()=>{

    /* TESTING */
    window.SessionAPI = SessionAPI;
    window.MangaAPI = MangaAPI;
    /*         */
    const root = document.querySelector('#root');
    ReactDOM.render(<Root />, root);
});