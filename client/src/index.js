import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.js';
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers/index.js'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

//STORE -> GLOBALIZED STATE
/*const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/

const loggerMiddleware = createLogger();

const store = createStore(
    allReducers, 
    applyMiddleware(
        thunk,
        loggerMiddleware
        ));

//ACTION 

//REDUCDER

//DISPATCH

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));