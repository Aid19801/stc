import React, { Component } from 'react';
import videoPlaceholder from './videoPlaceholder.jpg'
import styles from './styles.css';

class VideoSectionContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
        }
    }

    render() {
        return(
            <div className="vid-section-container">

                <div className="vid-container-title">
                    <h1 className="vid-containter-h1">Videohead</h1>
                </div>


                <div className="vid-box-container">
                    <div className="vid-box">
                        <img src={videoPlaceholder} className="vid-box-player" width={400} height={200 }/>
                        <h2 className="vid-box-title">Title no 1</h2>
                    </div>
                    <div className="vid-box">
                        <img src={videoPlaceholder} className="vid-box-player" width={400} height={200} />
                        <h2 className="vid-box-title">Title no 1</h2>
                    </div>
                    <div className="vid-box">
                        <img src={videoPlaceholder} className="vid-box-player" width={400} height={200} />
                        <h2 className="vid-box-title">Title no 1</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default VideoSectionContainer;