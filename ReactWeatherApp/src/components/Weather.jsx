import React from 'react';
import './weather.css';
import search_icon from '../assets/search.png';

const Weather = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' placeholder='Search' />
                <img src={search_icon} alt='search icon' />
            </div>
        </div>
    );
};

export default Weather;
