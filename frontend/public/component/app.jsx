import React from 'react';
import { Route, Switch } from 'react-router';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './navbar/navbar';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
    // <div className="main-container">
    //     <NavBar />        

    //     <div className="main">
    //         <Switch>
            
    //         </Switch>
    //     </div>
    // </div>
    <div className="main-container">
        <Switch>
            <AuthRoute exact path="/login" component={SessionFormContainer} />
            <Route path="/" component={NavBar} />
        </Switch>
    </div>
);

export default App;