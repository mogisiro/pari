import * as types from 'actions/actionTypes';

/*The redux users reducer manages the users section of the application state 
which is used by the HomePage to display a list of users and enable deleting of users. */

export default function users(state = {}, action) {
    switch(action.type) {  
      /* CHECK SESSIONS */
      case types.AUTH_GET_ALL:
          return {
            loading: true
          }
      case types.AUTH_GET_ALL_SUCCESS:
          return {
            items: action.users
          }
      case types.AUTH_GET_ALL_FAILURE:
          return {
            error: action.error
          }
      default:
        return state;
    }
  };
  