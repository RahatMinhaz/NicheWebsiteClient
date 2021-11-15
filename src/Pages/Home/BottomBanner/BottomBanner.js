import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner2 from '../../../images/banner 2.jpg'

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const BottomBanner = () => {
    return (
        <Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={10}>
                <img
                style={{paddingTop: '10px', paddingBottom: '20px', height: '650px', width: '100%'}}
                src={banner2} alt="" />
            </Grid>
            <Grid item style={{ ...verticalCenter, textAlign: 'right' }} xs={12} md={2}>
                <Typography variant="p">
                    We are always there to Provide you the best Service possible with cars. You can always depend on us to get the best possible brands and their latest models from us. We welcome you to our Valley Motor Works. Hope you'll find the cars that you want here
                </Typography>
            </Grid>
        </Grid>
    </Box>
        </Container>
    );
};

export default BottomBanner;