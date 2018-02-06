import React from 'react';
import { Route, Switch } from 'react-router';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './navbar/navbar';
import SessionFormContainer from './session_form/session_form_container';
import MangaIndexContainer from './manga/manga_index_container';

const App = () => (
    <div className="main-container">
        <Route path="/" component={NavBar} />
        <Switch>
            <AuthRoute exact path="/login" component={ SessionFormContainer } />
            <Route path="/" component={ MangaIndexContainer }/>
        </Switch>
    </div>
);

export default App;