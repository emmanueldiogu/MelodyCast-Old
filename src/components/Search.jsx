import React from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
    return (
        <>
            <label htmlFor="" className=" sr-only">search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <HiMiniMagnifyingGlass className='text-white' size={24} />
                </div>
                <input type="text" id="email-address-icon" className="bg-black/20 border-0 text-sm rounded-full focus:ring-gray-500 focus:border-gray-500 block w-full ps-14 p-2.5 border-gray-600 placeholder-white text-white shadow-lg" placeholder="Search for your preferred city..." />
            </div>
            {/* <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <HiMiniMagnifyingGlass className='text-white' size={24} />
                </div>
                <input type="search" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-full bg-black/20 text-white placeholder:text-white outline-none focus:outline-0 md:min-h-full shadow" placeholder="Search for your preferred city..." />
            </div> */}
        </>
    )
}

export default Search