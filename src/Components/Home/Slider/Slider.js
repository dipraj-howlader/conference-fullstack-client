import React from 'react';
import './Slider.css';
import img1 from '../../../image/1.jpg';
import img2 from '../../../image/2.jpg';
import img3 from '../../../image/3.jpg';
import img4 from '../../../image/4.jpg';
import img5 from '../../../image/5.jpg';

const Slider = () => {
    return (
        <div className="pic-ctn opacity-50">
        <img src={img1} alt="" className="pic" class="object-cover  w-full ..." />
        <img src={img2} alt="" className="pic" class="object-cover  w-full ..." />
        <img src={img3} alt="" className="pic"  class="object-cover  w-full ..."/>
        <img src={img4} alt="" className="pic" class="object-cover w-full ..." />
        <img src={img5} alt="" className="pic" class="object-cover w-full ..." />
      </div>
    );
};

export default Slider;