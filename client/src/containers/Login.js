import React, { Component } from 'react';
import StyledSignIn from '../components/signIn.js';
import { connect } from 'react-redux';
import { loginRequest, logoutRequest } from '../actions/authentication.js';

class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(logoutRequest());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(loginRequest(username, password));
        }
    }

    render() {
        return (
            <div>
                <StyledSignIn
                onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
};
 
export default connect(mapStateToProps)(Login);

