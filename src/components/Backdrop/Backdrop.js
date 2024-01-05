import React from 'react';

import './Backdrop.css';

const backdrop = ({ show }) => {
  const cssStyles = ['Backdrop', show ? 'BackdropOpened' : 'BackdropClosed'];

  return <div className={cssStyles.join(' ')}></div>;
};

export default backdrop;
