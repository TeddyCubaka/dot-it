
import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import CollectionCard from "./basics/collection-card";
import Header from "./basics/header";
import HelloCard from "./basics/hello-card";
import NavBarre from "./basics/navbarre";
import Playlist from "./Playlist";

export default function Album (){

    const [genre, setGenre]= useState({})
    const [albums, setAlbums]= useState({})

    useEffect(()=>{
      const  spotifyApi  =  new  SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('token'))
      const topArt = spotifyApi.getArtistAlbums("5f5mH9BDkeyXmDbzevu38d")
      topArt.then((data)=> setGenre(data))
    }, [])

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const topArt = spotifyApi.getMySavedTracks()    
        topArt.then((data)=> setAlbums(data))
    }, [])

    console.log(albums);

    // getArtistAlbums   : "5f5mH9BDkeyXmDbzevu38d"

    return(
        <div className="">
            <Header />
            <NavBarre />
            <div className="body">
                <div>
                    <div className="afficher">
                        {genre.items ? genre.items.map((art) => <CollectionCard object={art} />) : <div>Wait...</div>}
                    </div>
                    <div className="afficher">
                        {/* {albums.tracks ? albums.tracks.items.map((track) => <CollectionCard object={track}/>) : <div>Wait</div>} */}
                    </div>
                </div>
                <Playlist title={'playlist en cours'} />
            </div>
        </div>
    )
}