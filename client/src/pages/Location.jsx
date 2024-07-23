import ElevatedBox from "../components/ElevatedBox";
import backgroundImage from "../assets/bg-image.jpg";
import cloud from "../assets/cloud.png";

const Location = () => {
  return (
    <main className="md:col-span-11 grid grid-cols-3 gap-7 2xl:gap-10">
      <ElevatedBox className="justify-center items-center p-4 2xl:p-6 text-9xl font-bold">
        +
      </ElevatedBox>
      <ElevatedBox
        className="justify-between p-4 2xl:p-6"
        customStyle={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-xs leading-normal text-main capitalize">
              current city
            </p>
            <h4 className=" text-[32px] leading-full">Toronto</h4>
          </div>
          <div className="border-t-2 pt-2">
            <p>
              <span className=" border-r-2 pr-2">Sunday</span>
              <span className="pl-2">1 May 2024</span>
            </p>
            <p>20:00 (UTC-4)</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <img
              src={cloud}
              alt="cloud"
              className="2xl:max-w-[107px] 2xl:py-5"
            />
          </div>
          <div className=" text-end self-end">
            <p className="font-bold text-xs leading-normal capitalize">
              Partly Cloudy
            </p>
            <h4 className=" font-bebas 2xl:text-5xl text-main">20°C</h4>
          </div>
        </div>
      </ElevatedBox>
      <ElevatedBox
        className="justify-between p-4 2xl:p-6"
        customStyle={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-xs leading-normal text-main capitalize">
              current city
            </p>
            <h4 className=" text-[32px] leading-full">Los Angeles</h4>
          </div>
          <div className="border-t-2 pt-2">
            <p>
              <span className=" border-r-2 pr-2">Sunday</span>
              <span className="pl-2">1 May 2024</span>
            </p>
            <p>20:00 (UTC-4)</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <img
              src={cloud}
              alt="cloud"
              className="2xl:max-w-[107px] 2xl:py-5"
            />
          </div>
          <div className=" text-end self-end">
            <p className="font-bold text-xs leading-normal capitalize">
              Sunny{" "}
            </p>
            <h4 className=" font-bebas 2xl:text-5xl text-main">25°C</h4>
          </div>
        </div>
      </ElevatedBox>
      <ElevatedBox
        className="justify-between p-4 2xl:p-6"
        customStyle={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-xs leading-normal text-main capitalize">
              current city
            </p>
            <h4 className=" text-[32px] leading-full">Ha Noi</h4>
          </div>
          <div className="border-t-2 pt-2">
            <p>
              <span className=" border-r-2 pr-2">Sunday</span>
              <span className="pl-2">1 May 2024</span>
            </p>
            <p>20:00 (UTC-4)</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <img
              src={cloud}
              alt="cloud"
              className="2xl:max-w-[107px] 2xl:py-5"
            />
          </div>
          <div className=" text-end self-end">
            <p className="font-bold text-xs leading-normal capitalize">
              Humid Thunderstorm
            </p>
            <h4 className=" font-bebas 2xl:text-5xl text-main">26°C</h4>
          </div>
        </div>
      </ElevatedBox>
      <ElevatedBox
        className="justify-between p-4 2xl:p-6"
        customStyle={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-xs leading-normal text-main capitalize">
              current city
            </p>
            <h4 className=" text-[32px] leading-full">Tokyo</h4>
          </div>
          <div className="border-t-2 pt-2">
            <p>
              <span className=" border-r-2 pr-2">Sunday</span>
              <span className="pl-2">1 May 2024</span>
            </p>
            <p>20:00 (UTC-4)</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <img
              src={cloud}
              alt="cloud"
              className="2xl:max-w-[107px] 2xl:py-5"
            />
          </div>
          <div className=" text-end self-end">
            <p className="font-bold text-xs leading-normal capitalize">Foggy</p>
            <h4 className=" font-bebas 2xl:text-5xl text-main">12°C</h4>
          </div>
        </div>
      </ElevatedBox>
      <ElevatedBox
        className="justify-between p-4 2xl:p-6"
        customStyle={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-xs leading-normal text-main capitalize">
              current city
            </p>
            <h4 className=" text-[32px] leading-full">Sydney</h4>
          </div>
          <div className="border-t-2 pt-2">
            <p>
              <span className=" border-r-2 pr-2">Sunday</span>
              <span className="pl-2">1 May 2024</span>
            </p>
            <p>20:00 (UTC-4)</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <img
              src={cloud}
              alt="cloud"
              className="2xl:max-w-[107px] 2xl:py-5"
            />
          </div>
          <div className=" text-end self-end">
            <p className="font-bold text-xs leading-normal capitalize">
              Heavy Rain
            </p>
            <h4 className=" font-bebas 2xl:text-5xl text-main">21°C</h4>
          </div>
        </div>
      </ElevatedBox>
    </main>
  );
};

export default Location;
