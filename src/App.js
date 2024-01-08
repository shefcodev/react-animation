import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      showBlock: false,
    };
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className='App'>
        <p style={{ color: 'black' }}>{this.state.showBlock.toString()}</p>
        <h1>React Animations</h1>
        <button
          className='Button'
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toogle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: 'gray',
                width: 100,
                height: 100,
                margin: '1rem auto',
                borderRadius: '1rem',
                transition: 'opacity 1s ease-out',
                opacity:
                  state === 'exiting' || state === 'exited'
                    ? 0
                    : state === 'entering'
                    ? 0.5
                    : state === 'entered'
                    ? 1
                    : null,
              }}
            ></div>
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
