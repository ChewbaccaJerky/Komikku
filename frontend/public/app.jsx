import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/root';

document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.querySelector('#root');

    ReactDOM.render(<Root />, root);
});