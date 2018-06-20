import React from 'react';
import PropTypes from 'prop-types';

export const VideoContainerCardFactory = (PlatformSpecificComponent) => {

    const VideoContainerCard = ({ img, title, tagline }) => {
        return (
            <PlatformSpecificComponent
                title={title}
                img={img}
                tagline={tagline}/>
        )
    }

    VideoContainerCard.propTypes = {
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
    }

    return VideoContainerCard;
}



export default VideoContainerCardFactory;