import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{paddingBottom:5,marginTop:3}} bgcolor="#928F8E" color="#69625B">
            <Container maxWidth='1g'>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box>
                            <Typography sx={{paddingBottom:4}} variant="h3">
                            Valley Road Motors
                            </Typography>
                            <Typography sx={{paddingBottom:3}} variant="h4">
                            <div>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                                Sector:5, Road: 20, House:2
                            </Typography>
                            <Typography variant="h5">
                                Uttara,Dhaka
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box>
                            <Typography variant="h2">
                                Contact Us
                            <div>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            </Typography>
                            <Typography sx={{paddingBottom:2}} variant="h5">
                                Mobile No: +880 1725 666 778
                            </Typography>
                            <Typography variant="h5">
                                Telephone: 02 8267999
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;