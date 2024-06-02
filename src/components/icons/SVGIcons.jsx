import React from 'react'
import PropTypes from 'prop-types'

const SVGIcons = ({ width, height, className, path }) => {
    return (
        <svg
            width={width}
            height={height}
            className={`fill-current ${className}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <React.Fragment>
                {path}
            </React.Fragment>
        </svg>
    )
}

SVGIcons.propTypes = {
    path: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
};

SVGIcons.defaultProps = {
    path: null,
    width: '45', // Default width
    height: '44', // Default height
    className: 'text-[#FFFFFF33]', // Default class
};

export default SVGIcons