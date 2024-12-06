import './App.css';
import Nav from './componets/Nav';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import Home_Unlogged from './pages/Home_Unlogged';
import {onAuthStateChanged} from 'firebase/auth'
import Registration from './pages/Registration';
import React, { useState } from 'react';
import { auth , db} from './utils/init';
import requests from './utils/requests';



function App() {

  const [ reg_form , setReg_form] = useState(false)
  const [user , setUser] = useState(false)
  const [email_input , setEmail_input] = useState(false)
  const [movie , setMovie] = useState(false)
  const [favorites , setFavorites] = useState(false) 
  const [movies , setMovies] =  useState(requests)



  React.useEffect(() => {
    onAuthStateChanged(auth , (user) => {
      if(user){
        setUser(user)
        setReg_form(true)
      }
    })
    setMovies(
      movies
  )
  setMovie(
      requests.trendingAll.results[
          Math.floor(Math.random() * (requests.trendingAll.results.length))
      ]
  )
  } ,[])

  // console.log({user})
  console.log(favorites)


  return (
    <>

    <Router>
      {!user || !reg_form ?
        <Routes>
          <Route path='/' element={<Home_Unlogged setEmail_input={setEmail_input} setReg_form={setReg_form}/>} />
          <Route path='/login' element={<Registration email_input={email_input} reg_form={reg_form} setReg_form={setReg_form} setUser={setUser} />} />
       </Routes>
       :
       <>
        <Nav user={user} setUser={setUser} setReg_form={setReg_form}/>
        <Routes>
            <Route path='/' element={<Home movie={movie} setMovie={setMovie} user={user} setFavorites={setFavorites} favorites={favorites} movies={movies}  setMovies={setMovies}/>} />  
            <Route path='/movie/:id'  element={<Movie movie={movie} user={user} favorites={favorites}/>} />
            <Route path='/tv/:id' element={<Tv tv={movie} user={user} favorites={favorites}/>} />
        </Routes>
       </>
      }     
      </Router>
    </> 
  
)}

export default App;
