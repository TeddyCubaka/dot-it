import './App.css';
import React, { useEffect, useState } from "react";
import './App.css';
import Login from './component/loading';
import SpotifyWebApi from 'spotify-web-api-js'
import Header from './component/basics/header.js'

function App(){

  const [album, setAlbum] = useState([])
  const [token, setToken] = useState('')
  const [spotify, setSpotify]  = useState([])
  // const spotifyApi = [];

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
    <div className='App'>
      <Header />
      <Login />
    </div>
  )
}
   
export default App;
