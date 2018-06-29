import React from 'react';
import { connect } from 'react-redux';

const BannerFactory = ({ title, imageOne, tagline, waveImage, url }) => {
    const Banner = () => {
        return (
            <div id="banner-id">
                <h1>i am a banner</h1>
                <h2>title: {title}</h2>
                <img src={imageOne } />
                <img src={waveImage } />
                <h2>tagline: {tagline}</h2>
                <h2>link: {url}</h2>
            </div>
        )
    }
    return Banner;
}

const mapStateToProps = state => {
    return {
        title,
        imageOne,
        tagline,
        url,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerFactory);