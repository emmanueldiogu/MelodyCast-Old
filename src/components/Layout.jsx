import LoadingOverlay from "../utils/LoadingOverlay";
import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";
import WeatherDetail from "./WeatherDetail";
import Content from "./Content";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import backgroundImage from "./../assets/bg-image.jpg";
import { useSearch } from "../utils/SearchProvider";
import ProfileDetails from "./ProfileDetails";

const Layout = ({ children }) => {
  const currentPath = useLocation().pathname;
  const { isLoading, weatherImage } = useSearch();

  const selectRandomImage = () => {
    let index = parseInt(Math.random() * weatherImage.length);
    return weatherImage[index]?.src?.landscape;
  }

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <div
        className="h-screen overflow-hidden relative"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${selectRandomImage() || backgroundImage}) lightgray 50% / cover no-repeat`,
        }}
      >
        {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/20"></div> */}
        <div className="container mx-auto">
          <div className="relative grid grid-cols-1 gap-6 xxl:gap-8 py-3 xxl:py-5 grid-rows-[auto_auto_1fr]">
            <TopBar />
            {(currentPath === "/account") ? <ProfileDetails /> : <WeatherDetail />}
            <Content>
              {currentPath !== "/account" && <Menu />}
              {children}
            </Content>
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
