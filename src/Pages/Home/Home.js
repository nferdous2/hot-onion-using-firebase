import React from 'react';
import Foods from '../Homes/AllFood/Foods';
import Banner from '../Homes/Banner/Banner'
import About from '../About/About'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About />
            <Foods></Foods>
        </div>
    );
};

export default Home;