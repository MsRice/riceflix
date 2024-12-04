import React from 'react';
import { useState , useEffect } from 'react';
import Banner from '../componets/Banner';
import Category from '../componets/Category';
import requests from '../utils/requests';
import Footer from '../componets/Footer';
import { db } from '../utils/init';
import { collection , getDocs , getDoc , doc ,query , where} from 'firebase/firestore';


const Home = ({setMovie , user}) => {
    const [movies , setMovies] =  useState(requests)
    const [favorites , setFavorites] = useState(false) 

    useEffect(() => {
        setMovies(
            movies
        )
    }, [])

    useEffect(() => {
        getFavorites()
    }, [])

    console.log("favorites here-->" ,favorites)
   

    async function getFavorites() {
        console.log(user)
        const favoriteCollectionRef = await query(
            collection(db , "favorites"),
            where('uid', "==" , user.uid)

        )
        const { docs } = await getDocs(favoriteCollectionRef)
        const favoriteMovies = docs.map(doc => doc.data())
        const favorite_list = favoriteMovies.map(item => item.movie)
        console.log("favorites here-->" ,favorites)
        
        setFavorites(favorite_list)
        console.log("favorites here-->" ,favorites)
       

    }

   

    return (
        <>
            <main className='section__wrapper'>

                <Banner />
                {favorites ? <Category title='Favorites' movies={favorites} setMovie={setMovie} /> : null}
                
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
