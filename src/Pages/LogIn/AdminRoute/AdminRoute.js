import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = (props) => {
    const {children, ...rest} = props;
    const {user,admin,loading} = useAuth();
    if(loading){
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render = {({location}) => user.email && admin ? (children) : (<Redirect
                to={{
                    pathname: '/',
                    state: { from:location}
                }}
                ></Redirect>)}
                >
        </Route>
        
    );
};

export default AdminRoute;