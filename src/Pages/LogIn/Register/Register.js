import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user,registerUser, loading,authError} = useAuth();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogIn = e => {
        if(loginData.password !== loginData.password2){
            alert("password didn't match");
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name,history);
        e.preventDefault();
    }
    return (
        <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3" sx={{color: "primary.main", fontWeight: 500, mt: 4}}  gutterBottom>Register Here</Typography>
                        {!loading && <form onSubmit={handleLogIn}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <TextField
                            sx={{width: '50%', m:1}}
                            id="standard-basic" label="Your Password" type="password" name="password" onBlur={handleOnBlur} variant="standard" />
                            <TextField
                            sx={{width: '50%', m:1}}
                            id="standard-basic" label="Confirm Your Password" type="password" name="password2" onBlur={handleOnBlur} variant="standard" />
                            <Button sx={{width: '50%', mt:3}} type="submit" variant="contained">Register</Button>
                            <Typography sx={{color:"warning.main", mt:3, mb:3}}>
                                Already Registered? 
                            </Typography>
                            <Link style={{textDecoration: 'none', fontSize: '30px'}} to="/login">LogIn Here</Link>
                        </form>}
                        {loading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Registered Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Register;