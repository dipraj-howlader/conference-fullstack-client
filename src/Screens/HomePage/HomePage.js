import React from 'react';
import About from '../../Components/Home/About/About';
import Navvbarr from '../../Components/Home/Navvbarr/Navvbarr';
import Slider from '../../Components/Home/Slider/Slider';
import Ticket from '../../Components/Home/Ticket/Ticket';

const HomePage = () => {
    return (
        <div>
            <Navvbarr></Navvbarr>
            <Slider></Slider>
            <About></About>
            <Ticket></Ticket>
        </div>
    );
};

export default HomePage;