import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <img
                style={{paddingTop: '10px', paddingBottom: '20px', height: '650px', width: '100%'}}
                src={banner} alt="" />
            </Grid>
        </Grid>
    </Box>
    );
};

export default Banner;