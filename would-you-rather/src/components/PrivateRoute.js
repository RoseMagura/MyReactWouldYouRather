import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, authedUser, ...rest}) => {    
    return (
        <Route
            {...rest}
            render={(props) => (
            authedUser !== null 
            ? <Component {...props}/>
            : <Redirect to='/login' />
        )}/>
    )
}

export default PrivateRoute