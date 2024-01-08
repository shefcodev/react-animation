import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = ({ show, closed }) => {
  return (
    <Transition in={show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {(state) => {
        const cssStyles = [
          'Modal',
          state === 'entering'
            ? 'ModalOpened'
            : state === 'exiting'
            ? 'ModalClosed'
            : null,
        ];

        return (
          <div className={cssStyles.join(' ')}>
            <h1>A Modal</h1>
            <button className='Button' onClick={closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};
export default modal;
