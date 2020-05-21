import React from 'react';
import emptyPicture from '../../assets/images/img_pic.svg';

import './TechWork.sass';

const TechWork = () => {
  return (
    <div className="tech-work">
      <img src={emptyPicture} alt="Empty"/>
      <b>We're working on this page now!</b>
      You will definitely know when it will be ready
    </div>
  )
};

export default TechWork;
