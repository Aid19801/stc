import React from 'react';
import { connect } from 'react-redux';

const BannerFactory = ({ foo }) => {
    const Banner = () => {
        return (
            <div id="banner-id">
                <h1>i am a banner thig</h1>
                <h1>{foo}</h1>
            </div>
        )
    }
    return Banner;
}

const mapStateToProps = state => {
    return {
        foo: 'bar'
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerFactory);