import React from 'react';
import { useState , useEffect } from 'react';
import Banner from '../componets/Banner';
import Category from '../componets/Category';
import requests from '../utils/requests';
import Footer from '../componets/Footer';




const Home = ({setMovie}) => {
    const [movies , setMovies] =  useState(requests)

    useEffect(() => {
        
        setMovies(
            movies
        )
    }, [])

    return (
        <>
            <main className='section__wrapper'>

                <Banner />
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
