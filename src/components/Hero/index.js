import React, { useEffect, useState } from 'react';
import HeroSVG from '../svgs/HeroSVG';
import ReadMore from '../ReadMore';

import './style.scss';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // On mount
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <h1>
          Digitisation:
          <br />
            the route to
          <br />
            business success
        </h1>
        <p>
          Now that more and more business leaders have ready access to
          digital solutions, the possibilities for innovation and productivity
          are almost endless
        </p>
      </div>
      <div className={`hero__art ${loaded ? 'visible-art' : ''}`}>
        <HeroSVG />
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;
