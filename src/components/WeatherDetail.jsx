import React from "react";
import PropTypes from "prop-types";
import cloud from "./../assets/cloud.png";
import { FaLocationDot } from "react-icons/fa6";

const WeatherDetail = (props) => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="city font-medium text-clamp-h2 text-white flex items-center gap-1 mb-5 2xl:mb-12">
            <FaLocationDot size={16} /> <span>Toronto</span>
          </h2>
          <div className="details flex items-center">
            <div className="flex flex-col pr-8 border-r border-white">
              <h3 className=" text-clamp-h3 font-bold text-white leading-full">
                Partly Cloudy
              </h3>
              <h4 className=" font-normal text-clamp-54 leading-full text-main font-bebas">
                <span>20</span>°<span>C</span>
              </h4>
            </div>
            <div className="flex flex-col font-normal text-clamp-day text-white leading-[120%] ml-8">
              <p>Sunday | 1 May 2024</p>
              <p>08:00 (UTC-4)</p>
            </div>
          </div>
        </div>
        <div>
          <img src={cloud} alt="cloud" className=" max-h-[120px] h-fit" />
        </div>
      </div>
    </section>
  );
};

WeatherDetail.propTypes = {};

export default WeatherDetail;
