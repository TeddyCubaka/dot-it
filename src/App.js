import './App.css';
import React, { useEffect, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './component/loading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import { IconContext } from 'react-icons';
import Header from './component/basics/header';
import Search from './component/search';


function App(){
  const [spotify, setSpotify]  = useState(['siuu'])
  const [itema, setItema] = useState([])
  const [vari, setVari] = useState('siuu')

  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      localStorage.setItem('token', hash.substring(1).split('&')[0].split('=')[1])
    }
  }, [])

  useEffect(()=>{
    const  spotifyApi  =  new  SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('token'))
    if(spotifyApi)localStorage.setItem('spotify', spotifyApi)
  }, [])

  return (
    <Router>
      <IconContext.Provider value={{color: '#393938', size : '40px'}}>
        <div className='App'>
          {/* <GetMe /> */}
        </div>
      </IconContext.Provider>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route path='/:j' element={<Header  />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    </Router>
  )
}
   
export default App;
