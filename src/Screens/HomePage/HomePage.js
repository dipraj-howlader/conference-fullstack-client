import React from 'react';
import About from '../../Components/Home/About/About';
import Navvbarr from '../../Components/Home/Navvbarr/Navvbarr';
import Slider from '../../Components/Home/Slider/Slider';

const HomePage = () => {
    return (
        <div>
            <Navvbarr></Navvbarr>
            <Slider></Slider>
            <About></About>
        </div>
    );
};

export default HomePage;