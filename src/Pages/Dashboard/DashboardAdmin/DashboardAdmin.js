import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import {
    Switch,
    useRouteMatch
    } from "react-router-dom";
import { Container } from '@mui/material';
import MakeAdmin from './Make Admin/Make Admin';
import ManageAllOrders from './Manage All Orders/Manage All Orders';
import AdminRoute from '../../LogIn/AdminRoute/AdminRoute';
import ManageProducts from './Manage Products/Manage Products';



const DashboardAdmin = () => {
    let { path, url } = useRouteMatch();
    return (
        <Box>
            <Container sx={{marginTop:3}}>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink to ={`${url}/makeadmin`}>
                    <Button sx={{color:'white'}} color="inherit">Make Admin</Button>
                    </NavLink>
                        <NavLink to ={`${url}/allorders`}>
                    <Button sx={{color:'white'}} color="inherit">Manage All Orders</Button>
                    </NavLink>
                    <NavLink to ={`${url}/add`}>
                    <Button sx={{color:'white'}} color="inherit">Add Product</Button>
                    </NavLink>
                    <NavLink to ={`${url}/manage`}>
                    <Button sx={{color:'white'}} color="inherit">Manage Products</Button>
                    </NavLink>
                </Toolbar>
                
            </AppBar>
            
        </Box>
                <Switch>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path ={`${path}/allorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
        </Container>
        </Box>
    );
};

export default DashboardAdmin;