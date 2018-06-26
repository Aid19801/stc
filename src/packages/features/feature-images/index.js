import React from 'react';
import PropTypes from 'prop-types';

export const VideoContainerCardFactory = PlatformSpecificComponent => {

    const VideoContainerCard = ({ img, title, tagline, handleClick }) => {

        return (
            <PlatformSpecificComponent
                title={title}
                img={img}
                tagline={tagline}
                onClick={handleClick}
            />
        )
    }

    VideoContainerCard.propTypes = {
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        handleClick: PropTypes.func,
    }

    return VideoContainerCard;
}

export default VideoContainerCardFactory;
