import React from 'react'
import TopBar from './TopBar';
import Menu from './Menu';
import WeatherDetail from './WeatherDetail';
import Content from './Content';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import backgroundImage from './../assets/bg-image.jpg';

const Layout = ({ children }) => {
    const currentPath = useLocation().pathname;
    return (
        <div className='min-h-dvh h-full' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <TopBar />
            <WeatherDetail />
            <Content>
                {currentPath !== '/account' && <Menu />}
                {children}
            </Content>
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
