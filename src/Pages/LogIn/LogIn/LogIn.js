import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const [loginData, setLoginData] = useState({});
    const {user,loginUser,signInUsingGoogle,loading,authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogIn = e => {
        loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () =>{
        signInUsingGoogle(location,history);
    }
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3" sx={{color: "primary.main", fontWeight: 500, mt: 4}}  gutterBottom>LogIn Here</Typography>
                        {!loading && <form onSubmit={handleLogIn}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                            <TextField
                            sx={{width: '50%', m:1}}
                            id="standard-basic" label="Your Password" type="password" name="password" onChange={handleOnChange} variant="standard" />
                            <Button sx={{width: '50%', mt:3}} type="submit" variant="contained">LogIn</Button>
                            <Typography sx={{color:"warning.main", mt:3, mb:3}}>
                                New User? 
                            </Typography>
                            <Link style={{textDecoration: 'none', fontSize: '30px'}} to="/registration">Register Here</Link>
                            {loading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Logged in Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        </form>}
                        <h4>OR</h4>
                        <Button onClick={handleGoogleSignIn} variant="contained">Sign In with Google</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default LogIn;