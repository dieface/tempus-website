import React from 'react';
import HeroLogo from '../logo/hero-logo';

import './background.scss';

const Background = () => (
  <div className="tf__background__container">
    <div className="tf__background__gradient" />
    <div className="tf__background__logo">
      <HeroLogo />
    </div>
    <div className="tf__background__mask" style={{ backgroundImage: 'url("/images/background-mask.png")' }} />
  </div>
);
export default Background;
