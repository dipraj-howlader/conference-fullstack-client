import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagento } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

const topics = [
    {
        topic:'Ask The Experts',
        des:'Large audiotorium with capacity of fifty thousand participants is also equipped with advanced facilities for your pleasure.',
        color:'orange',
        iconi: faMagento
    },
    {
        topic:'Latest Topics',
        des:'The location of the seminar is located in the city center so it is easily reached by private or public vehicles which available for 24 hours.',
        color:'deeppink',
        iconi: faChartLine
    },
    {
        topic:'Workshops',
        des:'There are many hotels available around the event location for temporary residence as long as you follow this event, from motels to 5 stars.',
        color:'purple',
        iconi: faDesktop
    }
]

const About = () => {
    return (
        <div className="service-container">
            <h1 class="text-gray-700 text-2xl font-serif font-bold md:font-black">How ConStart can help your startup to grow</h1>
            <p className="font-semibold text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, ut, eos dolorem maiores nisi sapiente non, vitae vel tenetur optio..</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 grid-cont px-16 pb-16">
        {
                topics.map(top => (
                    <div>   
                                <FontAwesomeIcon icon={top.iconi} size="4x" color={top.color} />
                                <h3 className="font-medium text-2xl text-gray-700 text-opacity-75 pb-4">{top.topic}</h3>
                                <h6 className=" font-light">{top.des}</h6>

                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default About;