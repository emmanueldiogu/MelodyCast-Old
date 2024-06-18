import LoadingOverlay from "../utils/LoadingOverlay";
import React, { useState } from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";
import WeatherDetail from "./WeatherDetail";
import Content from "./Content";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import backgroundImage from "./../assets/bg-image.jpg";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [todayForecast, setTodayForecast] = useState({});
  const currentPath = useLocation().pathname;

  const submitSearch = (queryString) => {
    setIsLoading(true);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${queryString}&units=metric&appid=816ae27a3e61fc6dcee0eef8b22a0394`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        // Update today's forecast
        setTodayForecast(data);
        console.log(data);
      })
      .catch((e) => alert(`Fetch Error: ${e.message}`));

    // TODO: Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // TODO: Remove this line when implementing actual API call
  };

  // Function to get props from child component
  const getSearchResult = (data) => {
    submitSearch(data);
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <div
        className="h-screen overflow-hidden relative"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
        }}
      >
        {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/20"></div> */}
        <div className="container mx-auto">
          <div className="relative grid grid-cols-1 gap-6 xxl:gap-8 py-3 xxl:py-5 grid-rows-[auto_auto_1fr]">
            <TopBar getSearchResult={getSearchResult} />
            {currentPath !== "/account" && (
              <WeatherDetail todayForecast={todayForecast} />
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
  getSearchResult: PropTypes.func,
};

export default Layout;
