import React from 'react';
import Logo from './../assets/melodycast.svg';
import User from './../assets/user.svg';
import PropTypes from 'prop-types';
import Search from './Search';

const TopBar = props => {
    return (
        <header>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
                <div className='flex h-24 items-center justify-between'>
                    <div className="w-[25%] flex items-center">
                        <a href="#" className="brand block">
                            <span className="sr-only">Home</span>
                            <img src={Logo} alt="MelodyCast Logo" className=' h-8' />
                        </a>
                    </div>
                    <div className="grow">
                        <Search />
                    </div>
                    <div className="w-[25%] flex justify-end items-center">
                        <button>
                            <img src={User} alt="User image" className=' w-14' />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

TopBar.propTypes = {}

export default TopBar;
