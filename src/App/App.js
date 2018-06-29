import React, { Component } from 'react';
import Header from './Header/header';
import VideoSectionContainer from './Vid-Section/vid-hero';
import Banner from './Banner-Section/banner';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <VideoSectionContainer />
        <Banner />
        
      </div>
    );
  }
}

export default App;
