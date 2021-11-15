import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CarCollection from '../CarCollection/CarCollection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarCollection></CarCollection>
        </div>
    );
};

export default Home;