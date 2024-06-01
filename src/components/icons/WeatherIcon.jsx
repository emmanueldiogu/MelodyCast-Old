import React from 'react'
import PropTypes from 'prop-types'
import SVGIcons from './SVGIcons';

const WeatherIcon = ({ width, height, className }) => {
    return (
        <SVGIcons
            path={
                [
                    <path
                        key="1"
                        d="m6.972 4.444.542.542a1.366 1.366 0 0 1 0 1.945l-.014.013a1.366 1.366 0 0 1-1.944 0l-.542-.541a1.366 1.366 0 0 1 0-1.945l.014-.014a1.379 1.379 0 0 1 1.944 0ZM1.875 13.82h1.417c.764 0 1.375.61 1.375 1.388v.014c0 .764-.611 1.375-1.39 1.361H1.876A1.37 1.37 0 0 1 .5 15.208v-.014a1.37 1.37 0 0 1 1.375-1.375ZM15.778 0h.014a1.37 1.37 0 0 1 1.375 1.375v1.347c0 .764-.611 1.375-1.39 1.361h-.013a1.37 1.37 0 0 1-1.375-1.375V1.375C14.389.611 15 0 15.778 0ZM24.583 4.444a1.396 1.396 0 0 1 1.959.014 1.367 1.367 0 0 1 0 1.945L26 6.944a1.366 1.366 0 0 1-1.944 0l-.014-.013a1.366 1.366 0 0 1 0-1.945l.541-.542ZM7.444 15.208c0-4.597 3.737-8.333 8.334-8.333a8.338 8.338 0 0 1 7.32 4.351 11.46 11.46 0 0 0-3.42 5.451 8.337 8.337 0 0 0-8.308 5.602 8.333 8.333 0 0 1-3.926-7.07ZM6.972 25.958a1.383 1.383 0 0 1-1.958 0A1.396 1.396 0 0 1 5 24l.542-.542a1.383 1.383 0 0 1 1.958 0l.014.014a1.379 1.379 0 0 1 0 1.945l-.542.541Z"
                    />,
                    <path
                        key="2"
                        d="M42.167 39.583H15.083a6.25 6.25 0 0 1-2.076-12.147 8.333 8.333 0 0 1 8.754-8.676c1.357-4.814 5.782-8.343 11.03-8.343 6.329 0 11.459 5.13 11.459 11.458 0 .435-.024.864-.071 1.286a8.333 8.333 0 0 1-2.012 16.422ZM21.303 47.977l2.77-5.538a1.397 1.397 0 1 1 2.5 1.25l-2.77 5.538a1.398 1.398 0 0 1-2.5-1.25ZM27.553 47.977l2.77-5.538a1.397 1.397 0 1 1 2.5 1.25l-2.77 5.538a1.398 1.398 0 0 1-2.5-1.25Z"
                    />,
                ]
            }
            width={width}
            height={height}
            className={className}
        />
    )
}

WeatherIcon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
};

WeatherIcon.defaultProps = {
    width: '50', // Default width
    height: '50', // Default height
    className: '', // Default class
};

export default WeatherIcon