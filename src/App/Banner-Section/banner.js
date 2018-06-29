import React from 'react';
import { connect } from 'react-redux';
import { scrollAndFade } from '../utils/scrollAndFade';

import styles from './styles.css';

export const Banner = ({ onLoad, bannerInformation, fadeInWhenScrollDown }) => {
    const { title, tagline, imageOne, imageTwo } = bannerInformation || '';
    onLoad();
    scrollAndFade();

    return (
        <div className="banner-outer-div hide-banner">
            <h4>{title}</h4>
            <h4>{tagline}</h4>
            <img src={imageOne} alt="imgOne" height={100} width={100} />
            <img src={imageTwo} alt="imgTwo" height={100} width={1000} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bannerInformation: state.bannerInformation
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch({ type: 'BANNER_REQUEST' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);





// TO-DO
// action is fired off when user scrolls down to the bottom of page
// banner is rendered
// banner styling - background
// make brown navbar render BEFORE anything else so people know the page is loading.
// setup image cacheing
// spike new look for 3 pane/boxes. They look a bit tacky. Possibly different colour scheme that reflects old VHS store.
