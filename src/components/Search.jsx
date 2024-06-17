import React, { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import LoadingOverlay from "../utils/LoadingOverlay";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  const submitSearch = (queryString) => {
    if (!(queryString.length > 2))
      return alert("Must have minimum of 2 characters");
    setIsLoading(true);
    console.log(queryString);
    // TODO: Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // TODO: Remove this line when implementing actual API call
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitSearch(e.target.value);
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <label htmlFor="" className=" sr-only">
        search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <HiMiniMagnifyingGlass
            className="text-white cursor-pointer"
            size={24}
          />
        </div>
        <input
          type="text"
          id="email-address-icon"
          className="bg-black/20 border-0 text-sm 2xl:text-lg rounded-full focus:ring-gray-500 focus:border-gray-500 block w-full ps-14 p-2.5 border-gray-600 placeholder-white text-white shadow-lg"
          placeholder="Type your preferred city and press ENTER"
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default Search;
