import React from 'react';
import UserPage from '../components/userPage.js';
import { connect } from 'react-redux';
import { getAllRequest, logoutRequest } from '../actions/authentication';

class MyPage extends React.Component{
    handleLogout = () => {
        this.props.logoutRequest().then(
            () => {
                //Materialize.toast('Good Bye!', 2000);
                alert("Good bye!");
                // EMPTIES THE SESSION
                let loginData = {
                    isLoggedIn: false,
                    username: ''
                };
 
                document.cookie = 'key=' + btoa(JSON.stringify(loginData));
            }
        );
    }
    render(){
        return(
            <div><UserPage/></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status
    };
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        getAllRequest: () => {
            return dispatch(getAllRequest());
        },
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);