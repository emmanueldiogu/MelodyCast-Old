import React from 'react';
import Logo from './../assets/melodycast.svg';
import User from './../assets/user.svg';
import PropTypes from 'prop-types';
import Search from './Search';
import { Link } from 'react-router-dom';

const TopBar = props => {
    return (
        <header>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
                <div className='flex h-24 items-center justify-between'>
                    <div className="w-[25%] flex items-center">
                        <Link to="/" className="brand block">
                            <span className="sr-only">Home</span>
                            <img loading='lazy' src={Logo} alt="MelodyCast Logo" className='max-w-full aspect-[5.26] max-h-8' />
                        </Link>
                    </div>
                    <div className="grow">
                        <Search />
                    </div>
                    <div className="w-[25%] flex md:justify-end items-center">
                        <Link to="/account">
                            <img src={User} alt="User image" className=' w-14' />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

TopBar.propTypes = {}

export default TopBar;
