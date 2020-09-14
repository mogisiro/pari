import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//로그인 했을 때만 접근 가능한 페이지에서 자격요건 체크
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)