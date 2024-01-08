import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const modal = ({ show, closed }) => {
  const cssStyles = ['Modal'];

  return (
    <Transition in={show} timeout={300} mountOnEnter unmountOnExit>
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
