import React from 'react'
import PropTypes from 'prop-types'
import SVGIcons from './SVGIcons';

const SettingsIcon = ({ width, height, className }) => {
    return (
        <SVGIcons
            width={width}
            height={height}
            className={className}
            path={[
                <path key="1" d="M15.73 22a6.77 6.77 0 1 1 13.54 0 6.77 6.77 0 0 1-13.54 0Z" />,
                <path key="2" fillRule="evenodd" clipRule="evenodd" d="M21.376.83a1.562 1.562 0 0 1 2.247 0l5.36 5.545h7.58c.862 0 1.562.7 1.562 1.563v7.58l5.545 5.358a1.562 1.562 0 0 1 0 2.247l-5.545 5.36v7.58c0 .862-.7 1.562-1.563 1.562h-7.58l-5.359 5.545a1.562 1.562 0 0 1-2.247 0l-5.359-5.545h-7.58c-.863 0-1.562-.7-1.562-1.563v-7.58L1.33 23.125a1.562 1.562 0 0 1 0-2.247l5.545-5.36v-7.58c0-.862.7-1.562 1.562-1.562h7.58L21.377.83ZM22.5 12.104c-5.465 0-9.896 4.43-9.896 9.896 0 5.465 4.43 9.896 9.896 9.896 5.465 0 9.896-4.43 9.896-9.896 0-5.465-4.43-9.896-9.896-9.896Z" />
            ]}
        />
    )
}

SettingsIcon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
};

SettingsIcon.defaultProps = {
    width: '43.29', // Default width
    height: '43.29', // Default height
    className: '', // Default class
};

export default SettingsIcon