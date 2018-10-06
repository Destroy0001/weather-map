import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import {
    Provider
} from 'react-redux';
import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'react'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';

//const reducers = combineReducers({});

/* creating the store */
//const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render((
    //<Provider store={store}>
        <Router history={createHistory()}>
            <Switch>
                <Route exact={true} path="*" component={App} />
            </Switch>
        </Router>
    //</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
