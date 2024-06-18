import { convertTimestamp } from "../utils/convertDateTime";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useSearch } from "../utils/SearchProvider";

const WeatherDetail = () => {
  const { todayForecast } = useSearch();
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="city font-medium text-clamp-h2 text-white flex items-center gap-1 mb-5 xxl:mb-12">
            <FaLocationDot size={16} />{" "}
            <span>{todayForecast?.name ?? "City Name"}</span>
          </h2>
          <div className="details flex items-center">
            <div className="flex flex-col pr-8 border-r border-white">
              <h3 className=" text-clamp-h3 font-bold text-white leading-full capitalize">
                {todayForecast.weather?.[0]?.description ??
                  "Weather Description"}
              </h3>
              <h4 className=" font-normal text-clamp-54 leading-full text-main font-bebas">
                <span>
                  {isNaN(parseInt(todayForecast.main?.temp))
                    ? "20" // Default value if NaN
                    : parseInt(todayForecast.main?.temp).toString()}
                </span>
                °<span>C</span>
              </h4>
            </div>
            <div className="flex flex-col font-normal text-clamp-day text-white leading-[120%] ml-8">
              <p>
                {todayForecast?.dt
                  ? convertTimestamp(todayForecast?.dt)
                  : "today"}
              </p>
              <p>
                {todayForecast?.dt
                  ? convertTimestamp(
                      todayForecast?.dt,
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      },
                      true
                    )
                  : "today"}{" "}
                (UTC{" "}
                {todayForecast?.timezone ? todayForecast?.timezone / 3600 : 0})
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={
              todayForecast?.weather?.[0].icon
                ? `http://openweathermap.org/img/wn/${todayForecast?.weather?.[0].icon}@4x.png`
                : "http://openweathermap.org/img/wn/03d@4x.png"
            }
            alt="cloud"
            className=" max-h-[120px] h-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default WeatherDetail;
