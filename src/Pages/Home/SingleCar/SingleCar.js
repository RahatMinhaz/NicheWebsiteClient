import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const SingleCar = (props) => {
    const{name,price,img,_id}= props.car;
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
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          {price} Taka
        </Typography>
        <CardActions>
          <Link to={`/purchase/${_id}`}>
              <Button sx={{textDecoration: 'none'}} variant="contained">Purchase this Item</Button>
          </Link>
          </CardActions>
      </CardContent>
    </Card>
        </Grid>
    );
};

export default SingleCar;