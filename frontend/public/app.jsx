import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/root';

import * as SessionAPI from './util/session_api_util';

document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.querySelector('#root');
    window.SessionAPI = SessionAPI;
    ReactDOM.render(<Root />, root);
});