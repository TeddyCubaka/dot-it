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

    useEffect(()=>{
      const  spotifyApi  =  new  SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('token'))
      const topArt = spotifyApi.getMyTopArtists()
      topArt.then((data)=> setTopArtiste(data))
    }, [])


    const [genre, setGenre]=useState({})
    // const [art, setArt]=  useState('black M')

    useEffect(()=>{
      const  spotifyApi  =  new  SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('token'))
      const topArt = spotifyApi.getMyTopTracks()
      topArt.then((data)=> setGenre(data))
    }, [])
    // console.log(genre);

    return (
        <div className="home">
            <Header />
            <NavBarre />
            <div className="home-body">
                <Link to="/home/playlist">Playlist</Link>
                <h2>Bonjour</h2>
                <div className="hello-collection">
                    <Link to="/playlist" >
                        <HelloCard elem={topArtiste.items[0]} />
                    </Link>
                    <HelloCard elem={topArtiste.items[1]} />
                    <HelloCard elem={topArtiste.items[2]} />
                    <HelloCard elem={topArtiste.items[3]} />
                    <HelloCard elem={topArtiste.items[3]} />
                    <HelloCard elem={topArtiste.items[3]} />
                    <HelloCard elem={topArtiste.items[3]} />
                </div>
                <h2>Vos chansons les plus écoutées</h2>
                <div className="collection-slider">
                    {
                        genre.items ? <div className="collection-slider">
                            <CollectionCard object={genre.items[0]}/>
                            <CollectionCard object={genre.items[1]}/>
                            <CollectionCard object={genre.items[2]}/>
                            <CollectionCard object={genre.items[3]}/>
                            <CollectionCard object={genre.items[4]}/>
                            <CollectionCard object={genre.items[5]}/>
                            <CollectionCard object={genre.items[6]}/>
                            <CollectionCard object={genre.items[7]}/>
                            <CollectionCard object={genre.items[8]}/>
                            <CollectionCard object={genre.items[9]}/>
                            <CollectionCard object={genre.items[10]}/>
                        </div>  : <div>Genre is not defin</div>}
                </div>
            </div>


            <SpotifyPlayer
                // token={localStorage.getItem('token')}
                uris={["spotify:track:7DPQMoNUREqcRjlnbFh2cN"]}
            />;
        </div>
    )
}