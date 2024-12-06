import React from 'react';
import { useState , useEffect } from 'react';
import Banner from '../componets/Banner';
import Category from '../componets/Category';
import requests from '../utils/requests';
import Footer from '../componets/Footer';
import { db } from '../utils/init';
import { collection , getDocs , getDoc , doc ,query , where} from 'firebase/firestore';


const Home = ({movie , setMovie , user , setFavorites , favorites , movies , setMovies }) => {
    // const [movies , setMovies] =  useState(requests)

    useEffect(() => {
            getFavorites()
    },[])
    //     setMovies(
    //         movies
    //     )
    //     setMovie(
    //         requests.trendingAll.results[
    //             Math.floor(Math.random() * (requests.trendingAll.results.length))
    //         ]
    //     )
    // }, [])

 
   
    // console.log(movie)
    //getFavorites()

    async function getFavorites() {
        // console.log(user)
        const favoriteCollectionRef = await query(
            collection(db , "favorites"),
            where('uid', "==" , user.uid)

        )
        const { docs } = await getDocs(favoriteCollectionRef)
        if(docs.length > 0 ){
            
            const favoriteMovies = docs.map((doc) => ({...doc.data() , fav_id: doc.id}))
            console.log(favoriteMovies)
            const favorite_list = favoriteMovies.map(item => item.movie)   
            setFavorites(favoriteMovies)
            
        }
        
    }
    

   

    return (
        <>
            <main className='section__wrapper'>

                <Banner movie={movie} setMovie={setMovie} favorites={favorites}/>
                {favorites ? <Category title='Favorites' movies={favorites.map(item => item.movie)} setMovie={setMovie} /> : null}
                
                <Category title='Trending Now' movies={movies.trendingAll.results} setMovie={setMovie} />
                <Category title='Trending Shows' movies={movies.trendingTV.results} setMovie={setMovie} />
                <Category title='Action Movies' movies={movies.actionMovies.results} setMovie={setMovie} />
                <Category title='Horror Movies' movies={movies.horrorMovies.results} setMovie={setMovie} />
                <Category title='Comedy Movies' movies={movies.comdeyMovies.results} setMovie={setMovie} />
                <Category title='Romance Movies' movies={movies.romanceMovies.results} setMovie={setMovie} />
                <Category title='Documentaries' movies={movies.documentaries.results} setMovie={setMovie} />

            </main>
            <Footer />
        </>
    );
}

export default Home;
