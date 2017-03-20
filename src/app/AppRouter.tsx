//#region [ Import React ]
import * as React from 'react';
import {Component} from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';


//#region [ Import Components ]
import AppFrame from './AppFrame';
import HomePage from './views/HomePage';
import AdminPage from './views/AdminPage';
import UserPage from './views/UserPage';
//#endregion

var router = (
     <Router  history={hashHistory}>
      <Route path="/" component={AppFrame}>
        <IndexRoute  component={HomePage} />
        <Route path="admin" component={AdminPage} />
        <Route path="users" component={UserPage} />
      </Route>
    </Router>
);


export let AppRouter = router;

