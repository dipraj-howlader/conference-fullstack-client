import React from 'react';
import About from '../../Components/Home/About/About';
import ContactUs from '../../Components/Home/ContactUs/ContactUs';
import Navvbarr from '../../Components/Home/Navvbarr/Navvbarr';
import Slider from '../../Components/Home/Slider/Slider';
import Ticket from '../../Components/Home/Ticket/Ticket';
import SocialMedia from '../../Components/Home/SocialMedia/SocialMedia';
const HomePage = () => {
    return (
        <div>
            <Navvbarr></Navvbarr>
            <Slider></Slider>
            <About></About>
            <Ticket></Ticket>
            <ContactUs></ContactUs>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default HomePage;