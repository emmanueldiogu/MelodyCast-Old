import React from "react";
import Logo from "./../assets/melodycast.svg";
import User from "./../assets/user.svg";
import PropTypes from "prop-types";
import Search from "./Search";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  return (
    <header>
      <div className="flex gap-0 items-center justify-between self-stretch max-md:flex-wrap">
        <div className="flex flex-col flex-1 justify-center items-start py-3.5">
          <Link to="/" className="brand block">
            <span className="sr-only">Home</span>
            <img
              loading="lazy"
              src={Logo}
              alt="MelodyCast Logo"
              className="aspect-[5.26] w-full max-w-[172px]"
            />
          </Link>
        </div>
        <div className="grow">
          <Search />
        </div>
        <div className="flex flex-col flex-1 justify-center items-end">
          <Link to="/account">
            <img src={User} alt="User image" className=" w-12" />
          </Link>
        </div>
      </div>
    </header>
  );
};

TopBar.propTypes = {};

export default TopBar;
