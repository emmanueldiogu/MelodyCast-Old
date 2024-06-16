import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import WeatherIcon from "./icons/WeatherIcon";
import MusicIcon from "./icons/MusicIcon";
import LocationIcon from "./icons/LocationIcon";
import SettingsIcon from "./icons/SettingsIcon";

const Menu = (props) => {
  return (
    <nav className="flex flex-col items-center justify-between self-stretch rounded-full py-7 lg:py-9 px-2 bg-black/20 shadow-glass backdrop-blur-md">
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
  );
};

Menu.propTypes = {};

export default Menu;
