import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { useGlobalContext } from '../context/Global';

const AuthRoute = ({ component: Component, ...rest }) => {
    const [globalState] = useGlobalContext();

    return (
        <Route {...rest} render={(props) => (
            globalState.isLogin === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )} />
    );
}

export default AuthRoute;