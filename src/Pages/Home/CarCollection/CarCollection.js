import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleCar from '../SingleCar/SingleCar';
import { Container, Typography } from '@mui/material';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';


const CarCollection = () => {
   const [cars,setCars] = useState([]);

   useEffect(() =>{
      fetch('https://shielded-beyond-24603.herokuapp.com/carscollection')
      .then(res => res.json())
      .then(data => setCars(data));
   },[]);
   return (
         <Box sx={{ flexGrow: 1 }}>
            <Container>
               <Typography sx={{fontweight: 500, m:2, color: 'primary.main'}} variant="h6" component="div">
                  Some of our cars
                  </Typography>
               <Typography sx={{fontweight: 600, m:3, color: 'primary.main'}} variant="h4" component="div">
                  Some of the New Collections
                  </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {
                     cars.map(car =>(<Grid sx={{m:5}}><SingleCar
                     key={car.serial}
                     car={car}
                     ></SingleCar><Route><NavLink to={`/home/${car._id}`} activeStyle = {{ fontWeight:"bold", color: "red"}}></NavLink></Route></Grid>))
                  }
            </Grid>
            </Container>
         </Box>
      );
};

export default CarCollection;