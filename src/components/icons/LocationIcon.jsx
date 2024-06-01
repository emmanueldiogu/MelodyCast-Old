import React from 'react'
import PropTypes from 'prop-types'
import SVGIcons from './SVGIcons';

const LocationIcon = ({ width, height, className }) => {
    return (
        <SVGIcons
            width={width}
            height={height}
            className={className}
            path={[
                <path
                    key="1"
                    d="M15.5.667c-8.282 0-15 6.583-15 14.7 0 11.025 15 27.3 15 27.3s15-16.275 15-27.3c0-8.117-6.718-14.7-15-14.7Zm0 19.95c-2.957 0-5.357-2.352-5.357-5.25s2.4-5.25 5.357-5.25c2.957 0 5.357 2.352 5.357 5.25s-2.4 5.25-5.357 5.25Z" />
            ]}
        />
    )
}

LocationIcon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
};

LocationIcon.defaultProps = {
    width: '45', // Default width
    height: '44', // Default height
    className: '', // Default class
};

export default LocationIcon