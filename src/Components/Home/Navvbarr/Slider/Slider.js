import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../image/1.jpg';
import img2 from '../../../../image/2.jpg';
const Slider = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img class="object-fill h-48 w-full ..." src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img class="object-fill h-48 w-full ..." src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;