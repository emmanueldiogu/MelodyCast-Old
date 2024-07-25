import { convertTimestamp } from "../utils/convertDateTime";
import { FaLocationDot } from "react-icons/fa6";
import { useSearch } from "../providers/useSearch";
import PropTypes from "prop-types";

const WeatherDetail = ({ music = "" }) => {
  const { todayForecast } = useSearch();
  const timestampObject = convertTimestamp(
    todayForecast?.dt,
    todayForecast?.timezone
  );
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
                  {
                    todayForecast?.main?.temp &&
                    !isNaN(todayForecast?.main?.temp)
                      ? parseInt(todayForecast?.main?.temp).toString()
                      : 0 // Default value if NaN or undefined
                  }
                </span>
                °<span>C</span>
              </h4>
            </div>
            <div className="flex flex-col font-normal text-clamp-day text-white leading-[120%] ml-8">
              {music.length > 0 ? (
                <p className=" text-5xl font-normal">{music}</p>
              ) : (
                <>
                  <p>
                    {`${timestampObject.weekday} | ${timestampObject.day} ${timestampObject.month} ${timestampObject.year}`}
                  </p>
                  <p>{`${timestampObject.time} (${timestampObject.timezone})`}</p>
                </>
              )}
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

WeatherDetail.propTypes = {
  music: PropTypes.string,
};

export default WeatherDetail;
