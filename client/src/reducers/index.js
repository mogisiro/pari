import register from './register.js';
import authentication from './authentication.js';
import users from './users.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    register,
    authentication,
    users
});

export default allReducers;