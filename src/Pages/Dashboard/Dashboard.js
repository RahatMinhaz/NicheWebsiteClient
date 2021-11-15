import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
    } from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
import { Container } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';
import DashboardAdmin from './DashboardAdmin/DashboardAdmin';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../LogIn/AdminRoute/AdminRoute';
import Footer from '../Shared/Footer/Footer';



const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();
    return (
        <div>
            <Box sx={{marginBottom: '600px'}}>
            <Navigation></Navigation>
            <Container sx={{marginTop:3}}>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        >
                        <MenuIcon />
                    </IconButton>
                    <NavLink to ={`${url}/orders`}>
                    <Button sx={{color:'white'}} color="inherit">MyOrders</Button>
                    </NavLink>
                        <NavLink to ={`${url}/payment`}>
                    <Button sx={{color:'white'}} color="inherit">Pay</Button>
                    </NavLink>
                    <NavLink to ={`${url}/review`}>
                    <Button sx={{color:'white'}} color="inherit">Review</Button>
                    </NavLink>
                    {admin && <Box>
                        <NavLink to ={`${url}/admin`}>
                    <Button sx={{color:'white'}} color="inherit">Dashboard Admin</Button>
                    </NavLink>
                        </Box>}
                </Toolbar>
                
            </AppBar>
        </Box>
        </Container>
        <Switch>
                    <Route path={`${path}/orders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path ={`${path}/payment`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path = {`${path}/admin`}>
                        <DashboardAdmin></DashboardAdmin>
                    </AdminRoute>
                </Switch>
        </Box>
        <Footer></Footer>
        </div>
    );
};

export default Dashboard;