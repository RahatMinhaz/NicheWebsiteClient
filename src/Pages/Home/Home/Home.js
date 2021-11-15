import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CarCollection from '../CarCollection/CarCollection';
import Review from '../Review/Review';
import BottomBanner from '../BottomBanner/BottomBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarCollection></CarCollection>
            <Review></Review>
            <BottomBanner></BottomBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;