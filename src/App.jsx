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
import { auth } from './utils/init';


function App() {

  const [ reg_form , setReg_form] = useState(false)
  const [user , setUser] = useState(false)
  const [email_input , setEmail_input] = useState(false)
  const [movie , setMovie] = useState(false)

  React.useEffect(() => {
    onAuthStateChanged(auth , (user) => {
      console.log("onAuthStateChanged :" , user)
      if(user){
        setUser(user)

      }
    })
  } ,[])

  console.log(user)
  console.log(reg_form)
  // console.log(movie)


  return (
    <>

    <Router>
      {!user || !reg_form ?
        <Routes>
          <Route path='/' element={ <Home_Unlogged setEmail_input={setEmail_input} setReg_form={setReg_form}/>} />
          <Route path='/login' element={ <Registration email_input={email_input} reg_form={reg_form} setReg_form={setReg_form} setUser={setUser} />} />
       </Routes>
       :
       <>
        <Nav user={user} setUser={setUser} setReg_form={setReg_form}/>
        <Routes>
            <Route path='/' element={ <Home setMovie={setMovie}/>} />  
            <Route path='/movie/:id'  element={<Movie movie={movie}/>} />
            <Route path='/tv/:id' element={<Tv />} />
        </Routes>
       </>
      }     
      </Router>
    </> 
  
)}

export default App;
