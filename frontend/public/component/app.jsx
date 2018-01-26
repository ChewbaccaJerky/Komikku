import React from 'react';
import { Route, Switch } from 'react-router';

import NavBar from './navbar/navbar';

const App = () => (
    <div>
        <NavBar />        

        <div className="main-page">
            <Switch>
            
            </Switch>
        </div>
    </div>
);

export default App;