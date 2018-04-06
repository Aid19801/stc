import React, { Component } from 'react';
import videoPlaceholder from './videoPlaceholder.jpg'
import eggtimer from './eggtimer.png';
import styles from './styles.css';
import { connect } from "react-redux";

class VideoSectionContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
        }
    }
    
    componentDidMount() {
        this.props.onRequestVids();
    }


    render() {
        const { videos } = this.props || [];
        const { fetching } = this.props;
        return (

            <div className="vid-section-container">

                <div className="vid-container-title">
                    <h1 className="vid-containter-h1">Videohead</h1>
                </div>

                <div className="vid-box-container">
                { fetching ? <img className="loading-eggtimer" src={eggtimer} width={30} height={30} /> : null }

                    {
                        videos.map((each, i) => <div key={i} className="vid-box">
                            <img src={videoPlaceholder} className="vid-box-player" width={400} height={200} />
                            <h2 className="vid-box-title">{each.title}</h2>
                            <h4 className="vid-box-title">{each.tagline}</h4>
                        </div>
                        )
                    }

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        videos: state.videos,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestVids: () => dispatch({ type: "API_CALL_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoSectionContainer);


