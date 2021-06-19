import React from 'react';
import Navvbarr from '../../Components/Home/Navvbarr/Navvbarr';
import Services from '../../Components/Home/Services/Services';
import Slider from '../../Components/Home/Slider/Slider';
import Something from '../../Components/Home/Something/Something';

const HomePage = () => {
    return (
        <div>
            <Navvbarr></Navvbarr>
            <Slider></Slider>
            <Services></Services>
            <Something></Something>
        </div>
    );
};

export default HomePage;