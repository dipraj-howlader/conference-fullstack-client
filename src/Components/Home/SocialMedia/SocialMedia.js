import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import './SocialMedia.css';


const SocialMedia = () => {
    const gotoMyWebsite = () =>{
        window.open("https://dipraj-s-portfolio.web.app/","_blank");
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 text-center">
            <div className="mt-8 pb-5 justify-center items-center">
            <FontAwesomeIcon style={{marginRight:'50px'}} icon={faFacebook} size="2x" color="rgb(21, 135, 173)" />
            <FontAwesomeIcon style={{marginRight:'50px'}} icon={faTwitter} size="2x" color="#00acee" />
            <FontAwesomeIcon style={{marginRight:'50px'}} icon={faLinkedin} size="2x" color="#0e76a8" />
            <FontAwesomeIcon icon={faGooglePlus} size="2x" color="#db4a39" />

            </div>
            <div className="mb-10">
            <small className="text-sm md:text-lg">© Copyright 2021 - ConStart by </small>
            <FontAwesomeIcon className="thisFont" onClick={gotoMyWebsite} icon={faUserSecret} size="4x" color="#149414" />
            <small className="text-sm md:text-lg"> Dipraj</small>
            </div>
        </div>
    );
};

export default SocialMedia;