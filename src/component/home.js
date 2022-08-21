import CollectionCard from "./basics/collection-card";
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Header from "./basics/header";
import HelloCard from "./basics/hello-card";
import NavBarre from "./basics/navbarre";
import Music from "./basics/musique";
import { Link, Routes, Route } from "react-router-dom";
import Playlist from "./Playlist";
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Home (){

    const [topArtiste, setTopArtiste ] = useState({items : [{name : "", images : [{url : ''}]}, {name : "", images : [{url : ''}]}, {name : "", images : [{url : ''}]}, {name : "", images : [{url : ''}]}, {name : "", images : [{url : ''}]}]})
    const [genre, setGenre]=useState({})
    const [myTrack, setMyTracks]=useState({})

    useEffect(()=>{
      const  spotifyApi  =  new  SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('token'))
      const topArt = spotifyApi.getMyTopArtists()
      topArt.then((data)=> setTopArtiste(data))
    }, [])


    useEffect(()=>{
      const  spotifyApi  =  new  SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('token'))
      const topArt = spotifyApi.getMyTopTracks()
      topArt.then((data)=> setGenre(data))
    }, [])

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const mySavedCard = spotifyApi.getMySavedTracks()
        mySavedCard.then((data)=> setMyTracks(data))
      }, [])
    //   console.log(genre)

    return (
        <div className="home">
            <Header />
            <NavBarre />
            <div className="home-body">
                <h2>Bonjour</h2>
                <div className="hello-collection">
                    <HelloCard elem={topArtiste.items[0]} />
                    <HelloCard elem={topArtiste.items[1]} />
                    <HelloCard elem={topArtiste.items[2]} />
                    <HelloCard elem={topArtiste.items[3]} />
                    {/* <HelloCard elem={topArtiste.items[4]} />
                    <HelloCard elem={topArtiste.items[5]} /> */}
                    
                </div>
                <h2>Vos chansons les plus écoutées</h2>
                <div className="collection-slider">
                    {
                        genre.items ? <div className="collection-slider">
                            {genre.items.map((track) => <CollectionCard object={track} /> )}
                        </div>  : <div>Genre is not defin</div>}
                </div>
                <h2>Vos artistes les plus écoutés</h2>
                <div className="collection-slider">
                    {topArtiste.items ? topArtiste.items.map((art)=> <CollectionCard 
                    object={art}
                    />
                    ) : <span></span> }
                </div>
            </div>


            {/* <SpotifyPlayer
                token={localStorage.getItem('token')}
                uris={["spotify:track:7DPQMoNUREqcRjlnbFh2cN"]}
            />; */}
        </div>
    )
}