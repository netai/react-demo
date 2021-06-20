import './Auth.css';

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from './login/Login';

class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="auth">
                Auth window
                <Redirect exact path="/" to="/auth/login" />
                <Route path="/auth/login" component={Login} />
            </div>
        );
    }
}

export default Auth;