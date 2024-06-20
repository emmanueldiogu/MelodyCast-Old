import LoadingOverlay from "../utils/LoadingOverlay";
import TopBar from "./TopBar";
import Menu from "./Menu";
import WeatherDetail from "./WeatherDetail";
import Content from "./Content";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSearch } from "../utils/useSearch";
import ProfileDetails from "./ProfileDetails";
import bgImage from "./../assets/bg-image.jpg";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const currentPath = useLocation().pathname;
  const { isLoading, weatherImage } = useSearch();
  const [backgroundImage, setBackgroundImage] = useState(bgImage);

  useEffect(() => {
    let index = parseInt(Math.random() * weatherImage.length);
    setBackgroundImage(weatherImage[index]?.src?.landscape);
    document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`;
  }, [backgroundImage, weatherImage]);

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <div className="min-h-screen relative">
        {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/20"></div> */}
        <div className="container mx-auto">
          <div className="relative grid grid-cols-1 gap-6 xxl:gap-8 py-3 xxl:py-5 grid-rows-[auto_auto_1fr]">
            <TopBar />
            {currentPath === "/account" ? (
              <ProfileDetails />
            ) : (
              <WeatherDetail />
            )}
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
