import React, { useEffect, useState } from 'react';
import requests, { baseUrl } from '../utils/requests';

import { FaPlay } from "react-icons/fa6";
import { BiInfoCircle } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';


const Banner = () => {
    
    const [movie , setMovie] = useState(null)

    useEffect(() => {
        
        setMovie(
            requests.trendingAll.results[
                Math.floor(Math.random() * (requests.trendingAll.results.length))
            ]
        )
    }, [requests])

    console.log(movie)

    return (
        <div className='banner__containter'>
        
            <figure className='banner__img--wrapper'>
                <img 
                    src={`${baseUrl}${movie?.backdrop_path}`} 
                    className='banner__img'
                    alt="" 
                />
            </figure>
            <div className='banner__info--container'>
                <h1 className='banner__info--title'>{movie?.title || movie?.name}</h1>   
                <p className='banner__info--para'>{movie?.overview}</p>
                <div className='banner__buttons'>
                    <button className='banner__button play-btn'><FaPlay className='play-icon'/>Play</button>
                    <button className='banner__button info-btn' ><BsInfoCircle className='info-icon'/>More Info</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
