import React, { Component } from 'react';
import Header from './Header/header';
import VideoSectionContainer from './Vid-Section/vid-hero';
import Banner from './Banner-Section/banner';
import Reveal from 'react-reveal/Reveal';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reveal>
          <Header />
          <VideoSectionContainer />
          <Banner />
        </Reveal>
      </div>
    );
  }
}

export default App;
