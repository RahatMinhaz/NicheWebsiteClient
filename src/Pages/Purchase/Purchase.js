import React, { useEffect, useState } from 'react';
import  {Grid, Box,Typography, Container, TextField, Button } from '@mui/material';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Purchase = () => {
    const { offerId } = useParams();
    const [ car,setCar ] = useState({});
    useEffect(() =>{
        fetch(`https://shielded-beyond-24603.herokuapp.com/carscollection/${offerId}`)
        .then(res => res.json())
        .then(data => setCar(data));
    },[]);
    useEffect(() =>{
        fetch(`https://shielded-beyond-24603.herokuapp.com/carscollection2/${offerId}`)
        .then(res => res.json())
        .then(data => setCar(data));
    },[]);

    const {user} = useAuth();

    const initialInfo = {customerName: user.displayName, email: user.email,customerAddress: '', phone: ''}
    const [purchaseInfo,setPurchaseInfo] = useState(initialInfo);
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...purchaseInfo};
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }

    const handleBooking = e =>{
        const purchase ={
            ...purchaseInfo,
            carName: car?.name
        }
        fetch('https://shielded-beyond-24603.herokuapp.com/usersinfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => (data.insertedId) 
            );
        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{marginBottom: '300px'}}>
            <Box sx={{ flexGrow: 1, marginTop: '100px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <img src={car.img} alt="" />
                    </Grid>
                <Grid item xs={4}>
                    <Typography sx={{marginBottom: 3}} variant = "h2">
                        {car?.name}
                    </Typography>
                    <Typography sx={{marginBottom: 3}} variant = "h5">
                        Retail: {car?.price}
                    </Typography>
                    <Typography sx={{marginBottom: 3}} variant = "h5">
                        Max Power: {car?.desc?.power}
                    </Typography>
                    <Typography sx={{marginBottom: 3}} variant = "h5">
                        Fuel: {car?.desc?.fuel}
                    </Typography>
                    <Typography sx={{marginBottom: 3}} variant = "h5">
                        Number of People: {car?.desc?.capacity}
                    </Typography>
                    <Typography sx={{marginBottom: 3}} variant = "h5">
                        Max Speed: {car?.desc?.speed} km/h
                    </Typography>
                    <Typography sx={{marginBottom: 3}} variant = "h5">
                        Engine: {car?.desc?.engine}
                    </Typography>
                    <Typography sx={{marginBottom: 3}} variant = "h5">
                        Transmission: {car?.desc?.transmission}
                    </Typography>
                    <form>
                        <Typography variant="h4">
                         Please Enter your Details
                        </Typography>
                        <TextField
                            sx={{marginTop:3,width:'90%'}}
                            id="outlined-size-small"
                            name="customerName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{marginTop:3,width:'90%'}}
                            id="outlined-size-small"
                            name="customerAddress"
                            onBlur={handleOnBlur}
                            defaultValue="Your Present Address"
                            size="small"
                        />
                        <TextField
                            sx={{marginTop:3,width:'90%'}}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{marginTop:3,width:'90%'}}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Your Phone Number"
                            size="small"
                        />
                        <Button onClick={handleBooking} sx={{marginTop:3}} type= "submit" variant="outlined">Submit</Button>
                    </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Purchase;