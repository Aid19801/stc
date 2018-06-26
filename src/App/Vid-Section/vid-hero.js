import React, { Component } from 'react';
// import videoPlaceholder from './videoPlaceholder.jpg'
import PaneBox from '../Reuseable-Components/Pane-Box/pane-box';
import eggtimer from './eggtimer.png';
import styles from './styles.css';
import { connect } from "react-redux";
import data from '../../Data/db.json';

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

            <div className="mainSiteBanner">

                <div className="mainSiteTitle">
                    <h1 className="vid-containter-h1">Videohead</h1>
                </div>

                <div className="flex-container">
                { fetching ? <img className="loading-eggtimer" src={eggtimer} width={30} height={30} /> : null }

                    {
                        videos.map((each, i) => <PaneBox eachVideo={each} key={i} />)
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


