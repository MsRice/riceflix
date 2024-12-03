import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = ({movie , setMovie}) => {
    const temp = true
    // console.log(movie)
    return (
        <div>
            { movie.media_type === 'tv' ?
             <Link to={`/tv/${movie.id}`} className='movie__container' onClick={() => {setMovie(movie)}}>
             <img 
                     src={`https://image.tmdb.org/t/p/w500${
                         movie.backdrop_path || movie.poster_path
                     }`}
                     // src='https://images.gmanews.tv/webpics/2023/12/bridgerton-3-res_2023_12_26_07_57_52.jpg'
                     className='movie__img'
                     alt="" 
             />
             <h3 className='movie__info'>
             {movie.title || movie.name}
             </h3>
         </Link>
             
             : 
               <Link to={`/movie/${movie.id}`}  className='movie__container' onClick={() => {setMovie(movie)}}>
                    <img 
                            src={`https://image.tmdb.org/t/p/w500${
                                movie.backdrop_path || movie.poster_path
                            }`}
                            // src='https://images.gmanews.tv/webpics/2023/12/bridgerton-3-res_2023_12_26_07_57_52.jpg'
                            className='movie__img'
                            alt="" 
                    />
                    <h3 className='movie__info'>
                    {movie.title || movie.name}
                    </h3>
                </Link>
            }

        </div>
      
    );
}

export default Thumbnail;
