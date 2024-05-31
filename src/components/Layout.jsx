import TopBar from './TopBar';
import Menu from './Menu';
import WeatherDetail from './WeatherDetail';
import Content from './Content';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
            <TopBar />
            <WeatherDetail />
            <Content>
                <Menu />
                {children}
            </Content>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
