import React from 'react';
import Sidebar from '../components/sidebar.js';
import { connect } from 'react-redux';
import { getAllRequest } from '../actions/authentication';

class Sidemenu extends React.Component{
    componentDidMount() { //컴포넌트 렌더링이 맨 처음 완료된 이후에 바로 세션확인
        // get cookie by name
        function getCookie(name) {
            var value = "; " + document.cookie; 
            var parts = value.split("; " + name + "="); 
            if (parts.length == 2) return parts.pop().split(";").shift();
        }
   
        // get loginData from cookie
        let loginData = getCookie('key');
   
        // if loginData is undefined, do nothing
        if(typeof loginData === "undefined") return;
   
        // decode base64 & parse json
        loginData = JSON.parse(atob(loginData));
   
        // if not logged in, do nothing
        if(!loginData.isLoggedIn) return;
   
        // page refreshed & has a session in cookie,
        // check whether this cookie is valid or not
        this.props.getAllRequest().then(
            () => {
                // if session is not valid
                if(!this.props.status.valid) {
                    // logout the session
                    loginData = {
                        isLoggedIn: false,
                        username: ''
                    };
   
                    document.cookie='key=' + btoa(JSON.stringify(loginData));
   
                    // and notify
                    //let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, please log in again</span>');
                    //Materialize.toast($toastContent, 4000);
                }
            }
        );
    }
  
    render(){
        return (
            <div>
                <Sidebar 
                isLoggedIn={mapStateToProps}
               />
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllRequest: () => {
            return dispatch(getAllRequest());
        }
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);