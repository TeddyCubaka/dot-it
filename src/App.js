import './App.css';
import React, { useEffect, useState } from "react";
import Login from './component/loading';
import SpotifyWebApi from 'spotify-web-api-js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import { IconContext } from 'react-icons';


function App(){
  const [token, setToken] = useState('')
  const [spotify, setSpotify]  = useState([])

  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      setToken(hash.substring(1).split('&')[0].split('=')[1])
    }
  }, [])
  
  useEffect(()=>{
    setSpotify(require('spotify-web-api-js'));
    const spotifyApi  =  new  SpotifyWebApi();
    spotifyApi.setAccessToken(token) 
    console.log(spotifyApi);
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
      </Routes>
    </Router>
  )
}
   
export default App;
