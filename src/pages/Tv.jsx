import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import requests from '../utils/requests';
import { FaPlay, FaX } from 'react-icons/fa6';
import { FiThumbsUp } from 'react-icons/fi';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import { db } from '../utils/init';
import { collection , addDoc , getDocs , getDoc , doc ,query , where, deleteDoc} from 'firebase/firestore';
import { TbCircleX } from 'react-icons/tb';



const Tv = ({ tv , user , favorites}) => {

    const { id } = useParams()
    console.log(id)

    const [global_key , setGlobal_key] = useState(false)
    const [unfavor , setUnfavor] = useState(false)

    yt_tv_embed(id)

    useEffect(() => {
        // console.log(favorites)
        if(favorites[0]){
            // console.log(favorites)
            for(var i = 0; i <= favorites.length; i++) {
                // console.log(favorites[i]?.movie.id)
                const temp = parseInt(id)
                if(favorites[i]?.movie.id === temp ){
                    setUnfavor(true)
                    // console.log('favorites[i]?.id')
                }

        }

    }
    } ,[])

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

    function addFavorites(movie){
        // console.log(user.uid , movie)
        const favorite = {
            movie : movie ,
            uid : user.uid,
        }
        setUnfavor(true)
        addDoc(collection(db , "favorites"), favorite)
    }

    function removeFavorites(movie){
        const removeID = favorites.filter(elem => {
            console.log(movie.id , elem.movie.id)
            if (elem.movie.id == movie.id){
                return true
            }
        })
        console.log(removeID[0].fav_id)
        const favRef = doc(db, "favorites" , removeID[0].fav_id)
        setUnfavor(false)
        deleteDoc(favRef)
    }

    async function fetchRelated(){}


    return (
        <div className='movie__details'>
        <div className='movie__trailer--wrapper'>
            <iframe  src= {`https://www.youtube.com/embed/${global_key}?autoplay=1`}
            allow='autoplay'
            width="100%" 
            height="100%" 
            controls = '1'
            className='movie__trailer--vid'>
            </iframe>
            <div className='movie__details--exit'>
                <Link to={'/'}>
                    <TbCircleX className='play-icon exit-btn'/>
                
                </Link>

            </div>
            <div className='movie__details--wrapper'>
                <h1 className='movie__details--title'>{tv.title || tv.name }</h1>
                <div className='btns'>
                    <button className='banner__button play-btn no-pointer'><FaPlay className='play-icon'/></button>
                    {!unfavor?
                    <button className='banner__button' onClick={() => {addFavorites(tv)}}><HiOutlinePlus /></button>
                    :
                    <div className='btns--favor'>
                        <button className='banner__button unfavor'><HiOutlinePlus /></button>
                        <button className='banner__button unfavor--sec' onClick={() => {removeFavorites(tv)}}><HiOutlineMinus /></button>
                    </div>
                }
                
                    <button className='banner__button no-pointer'><FiThumbsUp/></button>
                </div>
                <p className='movie__details--para'>{tv.overview}</p>
            </div>
        </div>
    </div>
    );
}

export default Tv;
