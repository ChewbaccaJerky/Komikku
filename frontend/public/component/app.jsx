import React from 'react';
import { Route, Switch } from 'react-router';

import NavBar from './navbar/navbar';

const App = () => (
    <div className="main-container">
        <NavBar />        

        <div className="main">
            <Switch>
            
            </Switch>
        </div>
    </div>
);

export default App;