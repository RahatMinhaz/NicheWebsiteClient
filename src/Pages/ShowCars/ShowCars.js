import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ShowCars = (props) => {
    const{name, img, price,desc,_id} = props.car
    return (
        <Grid item xs={2} sm={4} md={4}>
                  <Card sx={{ minWidth: 275 }}>
                  <CardMedia
                      component="img"
                      style={{width: 'auto', height: '150px', margin: '0 auto'}}
                      image={img}
                      alt="cars"
                  />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {desc.transmission}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          {price} Taka
          
        </Typography>
      </CardContent>
      <CardActions>
          <Link to={`/purchase/${_id}`}>
              <Button sx={{textDecoration: 'none'}} variant="contained">Purchase this Item</Button>
          </Link>
          </CardActions>
    </Card>
        </Grid>
    );
};

export default ShowCars;