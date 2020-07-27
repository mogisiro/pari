import React, { Component } from 'react';
import StyledSignUp from '../components/signUp.js';
import { connect } from 'react-redux';
import { registerRequest } from '../actions/authentication.js';
//import jQuery from "jquery";
//window.$ = window.jQuery = jQuery;
 
class Register extends Component {
    handleRegister = (username, passwd, email) => {
        return this.props.registerRequest(username, passwd, email).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    alert("Success! Please log in.");
                    //materialize.toast('Success! Please log in.', 2000);
                    this.props.history.push('/login');
                    return true;
                } else {
                    /*
                        ERROR CODES:
                            1: BAD USERNAME
                            2: BAD PASSWORD
                            3: USERNAME EXISTS
                    */
                    /*let errorMessage = [
                        'Invalid Username',
                        'Password is too short',
                        'Username already exists'
                    ];*/
                    alert("Fail!"+this.props.message);
                    //let $toastContent = $('<span style="color: #FFB4BA">' + this.props.message + '</span>');
                    //Materialize.toast($toastContent, 2000);
                    return false;
                }
            }
        );
    }
    render() {
        return (
            <div>
                <StyledSignUp
                onRegister={this.handleRegister}/>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        status: state.authentication.register.status,
        errorCode: state.authentication.register.error
    };
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest: (username, passwd, email) => {
            return dispatch(registerRequest(username, passwd, email));
        }
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Register);