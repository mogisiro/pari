import * as types from 'actions/actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
    switch(action.type) {  
      /* LOGIN */
      case types.AUTH_LOGIN:
        return {
            loggingIn: true,
            user: action.user
        }
      case types.AUTH_LOGIN_SUCCESS:
          return {
            loggedIn: true,
            user: action.user
          }
      case types.AUTH_LOGIN_FAILURE:
          return {
          }

        /* LOGOUT */
      case types.AUTH_LOGOUT:
        return {
        }

      default:
        return state;
    }
  };
  