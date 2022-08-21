// import { Search } from "@rsuite/icons";
import CollectionCard from "./basics/collection-card";
import Header from "./basics/header";
import React, { useEffect, useRef, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js'
import NavBarre from "./basics/navbarre";
import Playlist from "./Playlist";


export default function Search(){

    const [album, setAlbum] = useState({})
    const [value, setValue] = useState('')
    const [genre, setGenre]=useState({})
    const [tracks, setTracks] = useState({})

    const searcher = (e)=>{
        setValue(e.target.value)
    }

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const topArt = spotifyApi.searchArtists(value)
        topArt.then((data)=> setGenre(data))
        const album = spotifyApi.searchAlbums(value)
        album.then((data)=> setAlbum(data))
        const tracks = spotifyApi.searchTracks(value)
        tracks.then((data)=> setTracks(data))
    }, [value])
    

    const Artists = () => {
        return (
            <>
            <h1>Artistes</h1>
            <div className="collection-slider">
                {
                    genre.artists.items.map((art)=>
                        <div className="collection-card">
                            <div>
                                {art.images[0] ? <img src={art.images[0].url} alt=''/> : <img src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg" alt=""/>}
                            </div>
                            <div>
                                <h2>{art.name}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
            </>
        )
    }
    const Albums = () => {
        return(
            <>
            <h1>Albums</h1>
            <div className="collection-slider">
            {
                album.albums.items.map((albi)=>
                    <div className="collection-card">
                        <div>
                            {albi.images[0] ? <img src={albi.images[0].url} alt=''/> : <img src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg" alt=""/>}
                        </div>
                        <div>
                            <h2>{albi.name}</h2>
                            <div>Nous sommes sûr que vous allez aimez cette collections</div>
                        </div>
                    </div>        
                )
            }
            </div>
            </>
        )
    }
    const Tracks = () => {
        return (
            <>
            <h1>Tracks</h1>
            <div className="afficher">
                {
                    tracks.tracks.items.map((track)=>
                        <div className="collection-card">
                            <div>
                                {track.album.images ? <img src={track.album.images[0].url} alt=''/> : <img src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg" alt=""/>}
                            </div>
                            <div>
                                <h4>{track.name} - {track.artists[0].name} </h4>
                                {track.album ? <div> de l'abum {track.album.name} </div> : <div></div>}
                            </div>
                        </div>
                    )
                }
            </div>
            </>
        )
    }

    return (
        <div>
            <Header />
            <NavBarre />
            <div className="body" >
                <div>
                    <div>
                        <input type='text' onChange={searcher}/>
                    </div>
                    <div className='collection-slider'>
                        {genre.artists ? <Artists /> : <h2>Faites votre recherche ici</h2>}
                    </div>
                    <div className="collection-slider">
                        {album.albums ? <Albums /> : <h2>Ouvrez votre recherche ici</h2>}
                    </div>
                    <div> 
                        {tracks.tracks ? <Tracks /> : <h2>Les tracks s'afficherons ici</h2>}
                    </div>
                </div>
                <Playlist />
            </div>
        </div>
    )
}