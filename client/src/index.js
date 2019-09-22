import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.js';
import {createStore} from 'redux';
import allReducers from './reducers/index.js'
import {Provider} from 'react-redux';

//STORE -> GLOBALIZED STATE
const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//ACTION 

//REDUCDER

//DISPATCH

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));