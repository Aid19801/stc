import React from 'react';
import { connect } from 'react-redux';
// import BannerFactory from '../Reuseable-Components/Oblong-Banner/oblong-banner';

const Banner = ({ onLoad, bannerInformation }) => {
    onLoad();
    const { title, tagline, imageOne } = bannerInformation || '';
    console.log('BLOOOOOO: ', bannerInformation);
    return (
        <div>
            <h4>{title}</h4>
            <h4>{tagline}</h4>
            <img src={imageOne} alt="imgOne" height={100} width={100} />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('state: ', state);
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
// expand the reducer to incorporate banner actions
// saga that calls in banner/podcast information
// action is fired off when user scrolls down to the bottom of page
// banner is rendered.
