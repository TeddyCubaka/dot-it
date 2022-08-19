import './App.css';
import React, { useEffect } from "react";
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './component/loading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import { IconContext } from 'react-icons';
import Header from './component/basics/header';
import Search from './component/search';
import Playlist from './component/Playlist';


function App(){

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
        </div>
      </IconContext.Provider>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route path='/:j' element={<Header  />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/playlist' element={<Playlist />}/>
      </Routes>
    </Router>
  )
}
   
export default App;
