import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/melodycast.svg";
import profilePic from "../assets/user.svg";
import { useSearch } from "../providers/useSearch";
import Search from "./Search";

const TopBar = (props) => {
  const { currentUser } = useSearch();
  const [userProfilePic, setUserProfilePic] =
    useState();
    useEffect(() => {
      if (currentUser.img) {
        setUserProfilePic(currentUser.img);
      } else {
        setUserProfilePic(profilePic);
      }
    }, [currentUser]);
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
          <Search getSearchResult={props.getSearchResult} />
        </div>
        <div className="flex flex-col flex-1 justify-center items-end">
          <Link to="/account">
            <img
              src={userProfilePic}
              alt="User image"
              className=" w-12"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

TopBar.propTypes = {
  getSearchResult: PropTypes.func,
};

export default TopBar;
