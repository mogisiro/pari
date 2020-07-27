import axios from 'axios';
import {
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_GET_ALL,
    AUTH_GET_ALL_SUCCESS,
    AUTH_GET_ALL_FAILURE,
    AUTH_LOGOUT
} from './actionTypes';
import { userService } from '../services/userService.js';
import { history } from '../helpers/history.js';
 
/* REGISTER */
export function registerRequest(username, passwd, email) {
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(register());
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('email', email);
        params.append('passwd', passwd);
        params.append('user_div_cd', '0');
        params.append('row_stat_cd', '0');
       return axios.post('http://54.180.86.134:3000/users', params)
        .then((response) => {
            console.log(response);
            dispatch(registerSuccess());
        }).catch((error) => {
            dispatch(registerFailure(error.response.data.message));
        });
    };
}
 
export function register() {
    return {
        type: AUTH_REGISTER
    };
}
 
export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS,
    };
}
 
export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}

/* LOGIN */
export function loginRequest(username, passwd) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());
        // API REQUEST
        userService.login(username, passwd)
        .then(
            user => { 
                dispatch(loginSuccess(user));
                history.push('/');
            },
            error => {
                dispatch(loginFailure(error));
            }
        );
    };
  }
   
  export function login() {
      return {
          type: AUTH_LOGIN
      };
  }
   
  export function loginSuccess(username) {
      return {
          type: AUTH_LOGIN_SUCCESS,
          username
      };
  }
   
  export function loginFailure() {
      return {
          type: AUTH_LOGIN_FAILURE
      };
  }
  
/* Logout */
export function logoutRequest() {
    userService.logout();
    return { type: AUTH_LOGOUT };
}
 

/* GET STATUS */
export function getAllRequest() {
    return (dispatch) => {
        // inform Get Status API is starting
        dispatch(getAll());
 
        userService.getAll()
            .then(
                users => dispatch(getAllSuccess(users)),
                error => { 
                    dispatch(getAllFailure(error));
                }
            );
    };
}
 
export function getAll() {
    return {
        type: AUTH_GET_ALL
    };
}
 
export function getAllSuccess(username) {
    return {
        type: AUTH_GET_ALL_SUCCESS,
        username
    };
}
 
export function getAllFailure() {
    return {
        type: AUTH_GET_ALL_FAILURE
    };
}


