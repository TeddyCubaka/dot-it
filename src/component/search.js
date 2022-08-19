// import { Search } from "@rsuite/icons";
import CollectionCard from "./basics/collection-card";
import Header from "./basics/header";
import React, { useEffect, useRef, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js'


export default function Search(){

    const [album, setAlbum] = useState({})
    const [alb, setAlb] = useState('')
    const [genre, setGenre]=useState({})
    const [art, setArt]=  useState('')

    useEffect(()=>{
      const  spotifyApi  =  new  SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('token'))
      const topArt = spotifyApi.searchArtists(art)
      topArt.then((data)=> setGenre(data))
    }, [art])
    
    const searcher = (e)=>{
        setArt(e.target.value)
        setAlb(e.target.value)
    }

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const topArt = spotifyApi.searchAlbums(alb)
        topArt.then((data)=> setAlbum(data))
    }, [alb])
    
    const Artists = () => {
        return (
            <>
            <h1>Artistes</h1>
            <div className="afficher">
                {
                    genre.artists.items.map((art)=>
                        <>
                        <div className="collection-card">
                            <div>
                                {art.images[0] ? <img src={art.images[0].url} alt=''/> : <img src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg" alt=""/>}
                            </div>
                            <div>
                                <h2>{art.name}</h2>
                                <div>Nous sommes sûr que vous allez aimez cette collections</div>
                            </div>
                        </div>
                        </>                    
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
            <div className="afficher">
            {
                album.albums.items.map((albi)=>
                    <>
                        <div className="collection-card">
                            <div>
                                {albi.images[0] ? <img src={albi.images[0].url} alt=''/> : <img src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg" alt=""/>}
                            </div>
                            <div>
                                <h2>{albi.name}</h2>
                                <div>Nous sommes sûr que vous allez aimez cette collections</div>
                            </div>
                        </div>
                    </>                    
                )
            }
            </div>
            </>
        )
    }

    return (
        <div>
            <Header />
            <div>
                <input type='text' onChange={searcher}/>
            </div>
            <div>
                {genre.artists ? <Artists /> : <h2>Faites votre recherche ici</h2>}
            </div>
            <div>
            {album.albums ? <Albums /> : <h2>Ouvrez votre recherche ici</h2>}
            </div>
        </div>
    )
}
    {/* <img src={genre.artists.items[index].images[0].url} alt=""/> */}
    {/* <span>{art.images[2].height}</span> */}