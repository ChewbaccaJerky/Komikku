import React from 'react';
import { Route, Switch } from 'react-router';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Header from './header/header';
import NavBar from './navbar/navbar';
import SessionFormContainer from './session_form/session_form_container';
import MangaIndexContainer from './manga/manga_index_container';
import MangaDetailContainer from './manga/manga_detail_container';

const App = () => (
    <div className="main-container">
        <Header />
        <Route path="/" component={NavBar} />
        <Switch>
            <AuthRoute exact path="/login" component={ SessionFormContainer } />
            <Route exact path="/home" component={ MangaIndexContainer }/>
            <Route exact path="/manga/:alias" component={ MangaDetailContainer} />
        </Switch>
    </div>
);

export default App;