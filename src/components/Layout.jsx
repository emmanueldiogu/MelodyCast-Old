import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";
import WeatherDetail from "./WeatherDetail";
import Content from "./Content";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import backgroundImage from "./../assets/bg-image.jpg";

const Layout = ({ children }) => {
  const currentPath = useLocation().pathname;
  return (
    <div
      className="h-screen overflow-hidden relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/20"></div>
      <div className="container mx-auto">
        <div className="relative grid grid-cols-1 gap-6 2xl:gap-8 py-3 2xl:py-5 grid-rows-[auto_auto_1fr]">
          <TopBar />
          {currentPath !== "/account" && <WeatherDetail />}
          <Content>
            {currentPath !== "/account" && <Menu />}
            {children}
          </Content>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
