import React from 'react'
import PropTypes from 'prop-types'
import WeatherIcon from './icons/WeatherIcon';
import MusicIcon from './icons/MusicIcon';
import LocationIcon from './icons/LocationIcon';
import SettingsIcon from './icons/SettingsIcon';

const Menu = props => {
    return (
        <div>
            <WeatherIcon width={50} height={50} className="text-white" />
            <MusicIcon width={50} height={50} className="text-white" />
            <LocationIcon width={50} height={50} className="text-white" />
            <SettingsIcon width={50} height={50} className="text-white" />
        </div>
    )
}

Menu.propTypes = {}

export default Menu