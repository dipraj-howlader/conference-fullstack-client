import React from 'react';
import Navvbarr from '../../Components/Home/Navvbarr/Navvbarr';
import Services from '../../Components/Home/Services/Services';
import Slider from '../../Components/Home/Slider/Slider';

const HomePage = () => {
    return (
        <div>
            <Navvbarr></Navvbarr>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default HomePage;