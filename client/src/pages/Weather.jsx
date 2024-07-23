import ElevatedBox from "../components/ElevatedBox";
import AirQuality from "../assets/icons/air_quality.svg";
import Humidity from "../assets/icons/humidity.svg";
import Pressure from "../assets/icons/pressure.svg";
import SunRise from "../assets/icons/sunrise.svg";
import SunSet from "../assets/icons/sunset.svg";
import Thermometer from "../assets/icons/thermometer.svg";
import UVIndex from "../assets/icons/uv.svg";
import Wind from "../assets/icons/wind.svg";
import { useSearch } from "../utils/useSearch";
import { convertTimestamp } from "../utils/convertDateTime";

const Weather = () => {
  const { todayForecast } = useSearch();
  console.log(todayForecast);

  return (
    <main className="md:col-span-11 grid grid-rows-[auto_auto] justify-stretch gap-[22.5px] 2xl:gap-8">
      <div className="grid grid-flow-col grid-cols-6 gap-8 items-center">
        <ElevatedBox
          className={"col-span-1 flex-col justify-center p-6 aspect-square"}
        >
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex gap-[11px] justify-center">
              <img
                loading="lazy"
                src={SunRise}
                className="shrink-0 my-auto aspect-square max-w-5"
              />
              <div className="flex flex-col">
                <div className="text-xs 2xl:text-sm font-light leading-full">
                  Sunrise
                </div>
                <div className="font-semibold text-sm 2xl:text-base leading-normal lg:text-nowrap">
                  {
                    convertTimestamp(
                      todayForecast?.sys?.sunrise,
                      todayForecast?.timezone,
                      true
                    ).time
                  }
                </div>
              </div>
            </div>
            <div className="flex gap-[11px] justify-center">
              <img
                loading="lazy"
                src={SunSet}
                className="shrink-0 my-auto aspect-square max-w-5"
              />
              <div className="flex flex-col">
                <div className="text-xs 2xl:text-sm font-light leading-full">
                  Sunset
                </div>
                <div className="font-semibold text-sm 2xl:text-base leading-normal lg:text-nowrap">
                  {
                    convertTimestamp(
                      todayForecast?.sys?.sunset,
                      todayForecast?.timezone,
                      true
                    ).time
                  }
                </div>
              </div>
            </div>
          </div>
        </ElevatedBox>
        <ElevatedBox
          className={
            "col-span-1 flex-col relative justify-center p-6 aspect-square"
          }
        >
          <img
            loading="lazy"
            src={Wind}
            className="absolute inset-0 w-full h-auto p-6 max-w-none"
          />
          <div className="flex flex-col justify-center">
            <div className="text-clamp-20 text-center">
              {todayForecast?.wind?.speed &&
              !isNaN(parseFloat(todayForecast.wind.speed))
                ? parseInt(todayForecast.wind.speed)
                : 20}
            </div>
            <div className="text-xs 2xl:text-sm text-center font-light">
              km/hr
            </div>
          </div>
        </ElevatedBox>
        <ElevatedBox
          className={"col-span-1 flex-col justify-center p-6 aspect-square"}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-x-1 items-center justify-center text-white">
              <img
                loading="lazy"
                src={UVIndex}
                className="shrink-0 aspect-square max-w-5 2xl:max-w-6"
              />
              <div className="text-xs 2xl:text-sm font-light leading-full lg:text-nowrap">
                UV Index
              </div>
            </div>
            <div className="flex flex-col justify-center self-center text-white whitespace-nowrap">
              <div className="self-center text-clamp-20 leading-7 text-center">
                5
              </div>
              <div className="text-sm 2xl:text-base font-semibold">
                Moderate
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <span id="ProgressLabel" className="sr-only">
                  Loading
                </span>

                <span
                  role="progressbar"
                  aria-labelledby="ProgressLabel"
                  aria-valuenow="75"
                  className="block rounded-full bg-gray-200"
                >
                  <span
                    className="block h-1 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
                    style={{ width: "50%" }}
                  ></span>
                </span>
              </div>
            </div>
            <div className=" text-[8px] font-light leading-full text-center text-white">
              Sunscreen advised
            </div>
          </div>
        </ElevatedBox>
        <ElevatedBox
          className={"col-span-1 flex-col justify-center p-6 aspect-square"}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center justify-center text-white">
              <img
                loading="lazy"
                src={AirQuality}
                className="shrink-0 aspect-square max-w-5 2xl:max-w-6"
              />
              <div className="text-xs 2xl:text-sm font-light leading-full lg:text-nowrap">
                Air Quality
              </div>
            </div>
            <div className="flex flex-col justify-center self-center text-white whitespace-nowrap">
              <div className="self-center text-clamp-20 leading-7 text-center">
                40
              </div>
              <div className="text-sm 2xl:text-base font-semibold">Good</div>
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <span id="ProgressLabel" className="sr-only">
                  Loading
                </span>

                <span
                  role="progressbar"
                  aria-labelledby="ProgressLabel"
                  aria-valuenow="75"
                  className="block rounded-full bg-gray-200"
                >
                  <span
                    className="block h-1 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
                    style={{ width: "75%" }}
                  ></span>
                </span>
              </div>
            </div>
            <div className=" text-[8px] font-light leading-full text-center text-white">
              Moderate pollution
            </div>
          </div>
        </ElevatedBox>
        <ElevatedBox
          className={
            "col-span-2 flex-row justify-between items-center h-fit p-6"
          }
        >
          <div className="flex gap-2 font-light leading-full">
            <img
              loading="lazy"
              src={Thermometer}
              className="shrink-0 my-auto aspect-square"
            />
            <div className="flex flex-col gap-1 flex-1">
              <div className="text-sm leading-full">Feels like</div>
              <div className=" align-bottom font-bebas font-normal text-clamp-20 leading-full whitespace-nowrap">
                {
                  todayForecast?.main?.feels_like &&
                  !isNaN(parseFloat(todayForecast.main.feels_like))
                    ? parseInt(todayForecast.main.feels_like)
                    : 0 // Replace with your default value if speed is not a valid number
                }
                °C
              </div>
              <div className="text-[8px] leading-full max-w-[94px]">
                Wind makes it feel cooler
              </div>
            </div>
          </div>
          <div className="flex gap-2 font-light leading-full">
            <img
              loading="lazy"
              src={Humidity}
              className="shrink-0 my-auto aspect-square"
            />
            <div className="flex flex-col gap-1 flex-1">
              <div className="text-sm leading-full">Humidity</div>
              <div className=" align-bottom font-bebas font-normal text-clamp-20 leading-full whitespace-nowrap">
                {
                  todayForecast?.main?.humidity &&
                  !isNaN(parseFloat(todayForecast.main.humidity))
                    ? parseInt(todayForecast.main.humidity)
                    : 0 // Replace with your default value if speed is not a valid number
                }
                %
              </div>
              <div className="text-[8px] leading-full max-w-[94px]">
                Comfortable humidity levels
              </div>
            </div>
          </div>
          <div className="flex gap-2 font-light leading-full">
            <img
              loading="lazy"
              src={Pressure}
              className="shrink-0 my-auto aspect-square"
            />
            <div className="flex flex-col gap-1 flex-1">
              <div className="text-sm leading-full">Pressure</div>
              <div className="flex flex-1">
                <div className="align-bottom font-bebas font-normal text-clamp-20 leading-full whitespace-nowrap">
                  {
                    todayForecast?.main?.pressure &&
                    !isNaN(parseFloat(todayForecast.main.pressure))
                      ? parseInt(todayForecast.main.pressure)
                      : 0 // Replace with your default value if speed is not a valid number
                  }
                </div>
                <div className="self-end text-[8px] font-light leading-full">
                  HPA
                </div>
              </div>
              <div className="text-[8px] leading-full max-w-[94px]">
                High pressure, fairly good weather
              </div>
            </div>
          </div>
        </ElevatedBox>
      </div>
      <div className="h-fit">
        <div className="flex flex-col justify-between p-5 shadow-glass backdrop-blur-md bg-black/40 rounded-[40px] max-md:max-w-full">
          <div className="flex gap-0 justify-center text-base font-semibold text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center p-1.5 max-md:max-w-full">
              <div className="self-center text-xs lg:text-sm">Hourly</div>
              <div className="shrink-0 mt-1.5 h-px bg-white border border-white border-solid max-md:max-w-full" />
            </div>
            <div className="flex-1 justify-center items-center p-1.5 max-md:px-5 max-md:max-w-full text-xs lg:text-sm">
              Weekly
            </div>
          </div>
          <div className="flex gap-0 justify-between items-center text-center max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b06ce8e7e87e6c877dc09ed6867f28e9119c3c7d2754987cec0b5a43bb6d6f?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
              className="shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <div className="flex flex-1 gap-0 justify-between items-center self-stretch px-10 py-2 max-md:flex-wrap max-md:px-5">
              <div className="flex flex-col self-stretch px-3.5">
                <div className="text-2xl text-white">NOW</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5c3e006c05ab006a243a40889e3fb7524d269788b8ca35a8025a7b19ee64a2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="self-center mt-1.5 aspect-square w-[45px]"
                />
                <div className="flex flex-col mt-1.5">
                  <div className="self-center text-xl leading-5 text-white">
                    20°
                  </div>
                  <div className="text-xs leading-3 text-blue-500">
                    20% Chance of rain
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center self-stretch px-3.5 my-auto whitespace-nowrap max-md:px-5">
                <div className="self-stretch text-2xl text-white">09:00</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f621142b9b92cd736f9167428ab4b448f8608922246938c0577286309b7674?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="mt-1.5 w-8 aspect-square"
                />
                <div className="flex flex-col mt-1.5 leading-[100%]">
                  <div className="text-base text-white">21°</div>
                  <div className="text-xs text-blue-500">20%</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center self-stretch px-3.5 my-auto whitespace-nowrap max-md:px-5">
                <div className="self-stretch text-2xl text-white">10:00</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a249cb174720a0fdfd4763623be5138c70e09c6f78bcf80117bfa95ddf2e0e0?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="mt-1.5 w-8 aspect-square"
                />
                <div className="flex flex-col mt-1.5 leading-[100%]">
                  <div className="text-base text-white">22°</div>
                  <div className="text-xs text-blue-500">20%</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center self-stretch px-3.5 my-auto whitespace-nowrap max-md:px-5">
                <div className="self-stretch text-2xl text-white">11:00</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a7f31be9d6393dc0f42dce01f70af13678c5596b4d2d522d4872cd40d806e35?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="mt-1.5 w-8 aspect-square"
                />
                <div className="flex flex-col mt-1.5 leading-[100%]">
                  <div className="text-base text-white">23°</div>
                  <div className="text-xs text-blue-500">20%</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center self-stretch px-3.5 my-auto whitespace-nowrap max-md:px-5">
                <div className="self-stretch text-2xl text-white">12:00</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/40860982cfac8f9702f31a95934462c0ad2e45eeabf69da7a3ce0bbcd9e4820a?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="mt-1.5 w-8 aspect-square"
                />
                <div className="flex flex-col mt-1.5 leading-[100%]">
                  <div className="text-base text-white">23°</div>
                  <div className="text-xs text-blue-500">20%</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center self-stretch px-3.5 my-auto whitespace-nowrap max-md:px-5">
                <div className="self-stretch text-2xl text-white">13:00</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cee8f45cd212d9b1bcda261994fad4045ccef72bd9b5ce76f0cf9f5ab115f7e5?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="mt-1.5 w-8 aspect-square"
                />
                <div className="flex flex-col mt-1.5 leading-[100%]">
                  <div className="text-base text-white">23°</div>
                  <div className="text-xs text-blue-500">20%</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center self-stretch px-3.5 my-auto whitespace-nowrap max-md:px-5">
                <div className="self-stretch text-2xl text-white">14:00</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/99773f274f8cf49d522126334c6200a998f5de86512f607c963266e101c0ecda?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="mt-1.5 w-8 aspect-square"
                />
                <div className="flex flex-col mt-1.5 leading-[100%]">
                  <div className="text-base text-white">22°</div>
                  <div className="text-xs text-blue-500">20%</div>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a54790405c21a56604d3529c3ced41eea46f48c507168a1858a5bf96f1b666e5?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
              className="shrink-0 self-stretch my-auto aspect-[0.95] w-[19px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Weather;
