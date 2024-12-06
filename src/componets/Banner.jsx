import React, { useState } from 'react';
import requests, { baseUrl } from '../utils/requests';

import { FaPause, FaPlay } from "react-icons/fa6";
import { BiInfoCircle } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Banner = ({movie , setMovie , favorites}) => {
    
    // const [movie , setMovie] = useState(null)
    const [banner , setBanner] = useState(false)
    const [global_key , setGlobal_key] = useState(false)
   


    function playBtn(type){
        if(type === 'movie'){
            console.log(movie.id)
            setBanner(true)
            yt_embed(movie.id)
        }else if(type === 'tv'){
            console.log(movie.id)
            setBanner(true)
            yt_tv_embed(movie.id)
            
        }
        
    }

    async function yt_embed(id){
        const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDE5MmE0OWUyZjM0MDRiYWJkMTcxMGIxZGY1YTA5ZSIsIm5iZiI6MTczMjQ2MDk3OC4zODcyNzYsInN1YiI6IjY3MzJkYzZhODU1Y2JiNGU0OGY2NzEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UiUZa8zuts5Rg2wweeIxpqp7XQXU0ZaK3UY0DbJ2DhE'
            }
        };

        const response = await fetch(BASE_URL, options)
        const data = await response.json()
        const youtube_dict = data.results
        console.log(youtube_dict)
        
        const filter = youtube_dict.filter((elem) => elem.name === "Official Trailer" || elem.name === "Official Teaser")
        setGlobal_key(filter[0].key)
    }

    async function yt_tv_embed(id){
        const BASE_TV_URL = `https://api.themoviedb.org/3/tv/${id}/videos`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDE5MmE0OWUyZjM0MDRiYWJkMTcxMGIxZGY1YTA5ZSIsIm5iZiI6MTczMjQ2MDk3OC4zODcyNzYsInN1YiI6IjY3MzJkYzZhODU1Y2JiNGU0OGY2NzEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UiUZa8zuts5Rg2wweeIxpqp7XQXU0ZaK3UY0DbJ2DhE'
            }
        };

        const response = await fetch(BASE_TV_URL, options)
        const data = await response.json()
        const youtube_dict = data.results
        console.log(youtube_dict)
        
        const filter = youtube_dict.filter((elem) => elem.name === "Official Trailer" || elem.name === "Official Teaser")
        setGlobal_key(filter[0].key)
    }

    // console.log(movie)
    // function pauseBtn(){
    //     console.log(banner)
    //     const video = document.getElementsByClassName('banner__img')
    //     video.stopVideo()
    // }
    return (
        <>
       {!banner ? 
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
                { movie.media_type === 'tv' ? 
                    <div className='banner__buttons'>
                        
                        <button onClick={() => {playBtn('tv')}} className='banner__button play-btn'><FaPlay className='play-icon'/>Play</button> 
                        <button className='banner__button info-btn' > 
                            <Link to={`/tv/${movie?.id}`} onClick={() => {setMovie(movie)}}>
                                <BsInfoCircle className='info-icon'/>More Info
                            </Link>
                        </button>
                    </div>
                    
                :
                <div className='banner__buttons'>
                    
                <button onClick={() => {playBtn('movie')}} className='banner__button play-btn'><FaPlay className='play-icon'/>Play</button> 
                <button className='banner__button info-btn' > 
                    <Link to={`/movie/${movie?.id}`} onClick={() => {setMovie(movie)}}>
                        <BsInfoCircle className='info-icon'/>More Info
                    </Link>
                </button>
            
                </div>
            }


            </div>
        </div>
        :
        <div className='banner__containter'>
        
            <figure className='banner__img--wrapper'>
            <iframe  src= {`https://www.youtube.com/embed/${global_key}?autoplay=1`}
                allow='autoplay'
                width="100%" 
                height="100%" 
                controls = '1'
                className='banner__img'
                >
                </iframe>
            </figure>
            <div className='banner__info--container'>
                <h1 className='banner__info--title'>{movie?.title || movie?.name}</h1>   
                <p className='banner__info--para'>{movie?.overview}</p>
                <div className='banner__buttons'>
                    
                    <button  className='banner__button play-btn no-pointer'><FaPause className='play-icon'/>Pause</button> 
                    
                    { movie.media_type === 'tv' ? 
                <button className='banner__button info-btn' > 
                <Link to={`/tv/${movie?.id}`} onClick={() => {setMovie(movie)}}>
                    <BsInfoCircle className='info-icon'/>More Info
                </Link>
            </button>
                
                :
                <button className='banner__button info-btn' > 
                    <Link to={`/movie/${movie?.id}`} onClick={() => {setMovie(movie)}}>
                        <BsInfoCircle className='info-icon'/>More Info
                    </Link>
                </button>
            
            }
                </div>
            </div>
        </div>
    } 
        </>

    );
}

export default Banner;
