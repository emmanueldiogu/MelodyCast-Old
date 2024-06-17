import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  return (
    <>
      <label htmlFor="" className=" sr-only">
        search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <HiMiniMagnifyingGlass className="text-white" size={24} />
        </div>
        <input
          type="text"
          id="email-address-icon"
          className="bg-black/20 border-0 text-sm 2xl:text-lg rounded-full focus:ring-gray-500 focus:border-gray-500 block w-full ps-14 p-2.5 border-gray-600 placeholder-white text-white shadow-lg"
          placeholder="Search for your preferred city..."
        />
      </div>
    </>
  );
};

export default Search;
