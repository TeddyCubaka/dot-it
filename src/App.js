import './App.css';
import React, { useEffect, useState } from "react";
import Login from './component/loading';
import SpotifyWebApi from 'spotify-web-api-js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import { IconContext } from 'react-icons';
import Header from './component/basics/header';


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
    // console.log(localStorage.getItem('spotify'));
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
      </Routes>
    </Router>
  )
}
   
export default App;
