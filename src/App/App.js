import React, { Component } from 'react';
import Header from './Header/header';
import VideoSectionContainer from './vid-hero/vid-hero';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <VideoSectionContainer />
      </div>
    );
  }
}

export default App;
