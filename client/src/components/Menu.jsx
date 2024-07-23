import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import WeatherIcon from "./icons/WeatherIcon";
import MusicIcon from "./icons/MusicIcon";
import LocationIcon from "./icons/LocationIcon";
import SettingsIcon from "./icons/SettingsIcon";

const Menu = (props) => {
  return (
    <aside className="hidden md:flex md:col-span-1 h-full">
      <nav className="flex flex-col gap-y-6 2xl:gap-y-9 items-center justify-between rounded-full py-7 2xl:py-12 px-2 bg-white/20 shadow-glass backdrop-blur-md h-fit">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              "flex flex-col items-center text-center uppercase font-semibold text-xs gap-1 cursor-pointer group hover:text-white",
              isActive ? "text-white" : "text-white/20",
            ]
              .filter(Boolean)
              .join(" ")
          }
        >
          <WeatherIcon className="h-9 w-9 hover:text-white" />
          Weather
        </NavLink>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            [
              "flex flex-col items-center text-center uppercase font-semibold text-xs gap-1 cursor-pointer group hover:text-white",
              isActive ? "text-white" : "text-white/20",
            ]
              .filter(Boolean)
              .join(" ")
          }
        >
          <MusicIcon className="h-9 w-9 hover:text-white" />
          Music
        </NavLink>
        <NavLink
          to="/location"
          className={({ isActive }) =>
            [
              "flex flex-col items-center text-center uppercase font-semibold text-xs gap-1 cursor-pointer group hover:text-white",
              isActive ? "text-white" : "text-white/20",
            ]
              .filter(Boolean)
              .join(" ")
          }
        >
          <LocationIcon className="h-9 w-9 hover:text-white" />
          Location
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            [
              "flex flex-col items-center text-center uppercase font-semibold text-xs gap-1 cursor-pointer group hover:text-white",
              isActive ? "text-white" : "text-white/20",
            ]
              .filter(Boolean)
              .join(" ")
          }
        >
          <SettingsIcon className="h-9 w-9 hover:text-white" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

Menu.propTypes = {};

export default Menu;
