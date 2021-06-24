import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { useGlobal } from '../../common/context/Global';

const AuthRoute = ({ component: Component, ...rest }) => {
    const global = useGlobal();

    return (
        <Route {...rest} render={(props) => (
            global.value.isAutheticated === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )} />
    );
}

export default AuthRoute;