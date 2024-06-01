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
                        <h2 className="city font-medium text-2xl text-white flex items-center gap-1">
                            <FaLocationDot size={18} /> <span>Toronto</span>
                        </h2>
                        <div className="details flex items-center gap-16">
                            <div className="flex flex-col">
                                <h3 className="weather-main">Partly Cloudy</h3>
                                <h4><span>20</span>°<span>C</span></h4>
                            </div>
                            <div className="flex flex-col">
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