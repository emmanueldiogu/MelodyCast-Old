import React from "react";
import PropTypes from "prop-types";
import ElevatedBox from "../components/ElevatedBox";

const Account = (props) => {
  return (
    <>
      <div className="md:col-span-8 flex flex-col gap-[22.5px] 2xl:gap-8">
        <div className="text-clamp-20 font-medium text-white max-md:max-w-full h-fit">
          Saved Playlist
        </div>
        <div className="grid grid-cols-4 gap-4 2xl:gap-6 overflow-y-auto">
          <div className="flex flex-col">
            <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900/40 max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                className="self-center aspect-square w-full"
              />
              <div className="flex flex-col mt-3">
                <a href="#" className="font-bold text-ellipsis">
                Radiant Rhythms
                </a>
                <div
                  className="mt-1 font-medium line-clamp-2"
                  title="Mellow tunes for gray skies. Mellow tunes for gray skies"
                >
                  Lively tunes for sunny days.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900/40 max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                className="self-center aspect-square w-full"
              />
              <div className="flex flex-col mt-3">
                <a href="#" className="font-bold text-ellipsis">
                Golden Grooves
                </a>
                <div
                  className="mt-1 font-medium line-clamp-2"
                  title="Mellow tunes for gray skies. Mellow tunes for gray skies"
                >
                  Upbeat melodies for sunshine.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900/40 max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                className="self-center aspect-square w-full"
              />
              <div className="flex flex-col mt-3">
                <a href="#" className="font-bold text-ellipsis">
                Sunny Serenades
                </a>
                <div
                  className="mt-1 font-medium line-clamp-2"
                  title="Mellow tunes for gray skies. Mellow tunes for gray skies"
                >
                  Cheerful tunes for sunny vibes.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900/40 max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                className="self-center aspect-square w-full"
              />
              <div className="flex flex-col mt-3">
                <a href="#" className="font-bold text-ellipsis">
                Sunbeam Symphony
                </a>
                <div
                  className="mt-1 font-medium line-clamp-2"
                  title="Mellow tunes for gray skies. Mellow tunes for gray skies"
                >
                 Bright music for sunny days.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900/40 max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                className="self-center aspect-square w-full"
              />
              <div className="flex flex-col mt-3">
                <a href="#" className="font-bold text-ellipsis">
                Gloom Grooves
                </a>
                <div
                  className="mt-1 font-medium line-clamp-2"
                  title="Mellow tunes for gray skies. Mellow tunes for gray skies"
                >
                  Mellow tunes for gray skies.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900/40 max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                className="self-center aspect-square w-full"
              />
              <div className="flex flex-col mt-3">
                <a href="#" className="font-bold text-ellipsis">
                Hazy Horizons
                </a>
                <div
                  className="mt-1 font-medium line-clamp-2"
                  title="Mellow tunes for gray skies. Mellow tunes for gray skies"
                >
                  Dreamy melodies for misty views.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900/40 max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                className="self-center aspect-square w-full"
              />
              <div className="flex flex-col mt-3">
                <a href="#" className="font-bold text-ellipsis">
                Fog Harmonies
                </a>
                <div
                  className="mt-1 font-medium line-clamp-2"
                  title="Mellow tunes for gray skies. Mellow tunes for gray skies"
                >
                 Soft music in foggy weather.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900/40 max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                className="self-center aspect-square w-full"
              />
              <div className="flex flex-col mt-3">
                <a href="#" className="font-bold text-ellipsis">
                Chords of the Clouds
                </a>
                <div
                  className="mt-1 font-medium line-clamp-2"
                  title="Mellow tunes for gray skies. Mellow tunes for gray skies"
                >
                 Music soaring like clouds.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ElevatedBox className="md:col-span-4 py-4  px-6 flex flex-col justify-between text-2xl font-medium text-white">
        Report Incorrect Weather
        <div className="flex gap-2.5 mt-1">
          <div className="flex-1 font-light text-sm">
            If you notice any inaccuracies in the weather information provided
            by our app, please report them using the form below:
          </div>
        </div>
        <div className="flex gap-2.5 mt-1 px-2">
          <div className="font-semibold text-sm">Location</div>
          <div className="flex-1 relative gap-2.5 mt-1">
            <input
              type="text"
              placeholder="Choose your location"
              className="bg-black/20 border-0  font-light text-sm rounded-full focus:ring-gray-500 focus:border-gray-500 block w-full ps-14 border-gray-600 placeholder-gray-400 shadow-lg mt-3 flex-1 p-2.5  "
            />
          </div>
        </div>
      </ElevatedBox>
    </>
  );
};

Account.propTypes = {};

export default Account;
