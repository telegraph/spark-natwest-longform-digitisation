import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';

function Pullquote({quote, specialQuote, notopborder, nopaddingtop ,children}) {
  const [bodyContent, isVisible] = makeVisible();


  return (
    <div className={`pullquote ${quote ? 'pullquote--withquote' : ''} ${notopborder ? 'pullquote--notopborder' : ''} ${specialQuote ? 'pullquote--special' : ''} ${nopaddingtop ? 'pullquote--nopaddingtop' : ''} ${isVisible ? 'visible' : ''}`} ref={bodyContent}>
      {children}
    </div>
  );
}

export default Pullquote;
