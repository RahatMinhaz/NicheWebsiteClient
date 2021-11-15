import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import ShowCars from '../../Pages/ShowCars/ShowCars';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Showroom = () => {
    const [cars,setCars] = useState([]);
    useEffect(() =>{
        fetch('https://shielded-beyond-24603.herokuapp.com/carscollection2')
        .then(res => res.json())
        .then(data => setCars(data));
    },[])
    
    return (
        <div>
            <Navigation></Navigation>
            <Container>
               <Typography sx={{fontweight: 600, m:3, color: 'primary.main'}} variant="h4" component="div">
                  The Whole Showroom is Here
                  </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {
                     cars.map(car =><Grid sx={{m:5}}><ShowCars
                     key={car.serial}
                     car={car}
                     ></ShowCars><Route><NavLink to={`/cars/${car._id}`} activeStyle = {{ fontWeight:"bold", color: "red"}}></NavLink></Route></Grid>)
                  }
            </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Showroom;