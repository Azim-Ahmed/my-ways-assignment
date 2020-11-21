import React from 'react';
import Banner from '../../Banner';
import Success from '../Success/Success';
import NavSection from './Header/NavSection';

const Home = () => {
    return (
        <div>
            <NavSection></NavSection>
            <Banner></Banner>
            {/* <Success></Success> */}
        </div>
    );
};

export default Home;