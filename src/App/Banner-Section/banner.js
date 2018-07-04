import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

export const Banner = ({ onLoad, bannerInformation }) => {
    const { title, tagline, imageOne, imageTwo } = bannerInformation || '';
    onLoad();

    return (
        <div className="banner-outer-div">
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
