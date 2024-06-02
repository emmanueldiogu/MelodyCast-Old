import React from 'react'
import PropTypes from 'prop-types'
import cloud from './../assets/cloud.png';
import { FaLocationDot } from "react-icons/fa6";


const WeatherDetail = props => {
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h2 className="city font-medium text-2xl text-white flex items-center gap-1 mb-12">
                            <FaLocationDot size={18} /> <span>Toronto</span>
                        </h2>
                        <div className="details flex items-center">
                            <div className="flex flex-col pr-8 border-r border-white">
                                <h3 className=" text-5xl font-bold text-white">Partly Cloudy</h3>
                                <h4 className=' font-normal text-8xl text-main font-bebas'><span>20</span>°<span>C</span></h4>
                            </div>
                            <div className="flex flex-col font-normal text-[28px] text-white leading-8 ml-8">
                                <p>Sunday | 1 May 2024</p>
                                <p>08:00 (UTC-4)</p>
                            </div>
                        </div>
                    </div>
                    <div><img src={cloud} alt="cloud" /></div>
                </div>
            </div>
        </section>
    )
}

WeatherDetail.propTypes = {}

export default WeatherDetail