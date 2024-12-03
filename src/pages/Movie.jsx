import { H1Icon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import yt_embed from '../utils/youtube';
// import { _key } from '../utils/youtube';
import requests from '../utils/requests';
import { FaPlay } from 'react-icons/fa6';
import { FiThumbsUp } from 'react-icons/fi';
import { HiOutlinePlus } from 'react-icons/hi';





function Movie({movie}){
   
    const { id } = useParams()     
    const key = "hDZ7y8RP5HE"
    console.log(movie)
    yt_embed(id)
    
    const [global_key , setGlobal_key] = useState(false)
    
    console.log(global_key)
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
        
        const filter = youtube_dict.filter((elem) => elem.name === "Official Trailer")
        setGlobal_key(filter[0].key)
        


    }
    
    return (
        <div className='movie__details'>
            <div className='movie__trailer--wrapper'>
                <iframe  src= {`https://www.youtube.com/embed/${global_key}?autoplay=1`}
                allow='autoplay'
                frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            width="100%" 
            height="100%" 
            scrolling="auto"
                className='movie__trailer--vid'>
                    
                </iframe>
                <div className='movie__details--wrapper'>
                    <h1 className='movie__details--title'>{movie.title || movie.name }</h1>
                    <div className='btns'>
                        <button className='banner__button play-btn no-pointer'><FaPlay className='play-icon'/>Play</button>
                        <button className='banner__button'><HiOutlinePlus /></button>
                        <button className='banner__button no-pointer'><FiThumbsUp/></button>

                    </div>
                    <p className='movie__details--para'>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default Movie;
