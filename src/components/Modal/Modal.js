import React from 'react';

import './Modal.css';

const modal = ({ show, closed }) => {
  const cssStyles = ['Modal', show ? 'ModalOpened' : 'ModalClosed'];

  return (
    <div className={cssStyles.join(' ')}>
      <h1>A Modal</h1>
      <button className='Button' onClick={closed}>
        Dismiss
      </button>
    </div>
  );
};
export default modal;
