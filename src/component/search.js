// import { Search } from "@rsuite/icons";
import CollectionCard from "./basics/collection-card";
import Header from "./basics/header";
import React, { useEffect, useRef, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js'


export default function Search(){

    const input = useRef()
    const obj = {tok : 'c\'est bon'}
    const [genre, setGenre]=useState({artists : {
        items : [
            {
                images : [
                    {url : "#"}, {url : "#"}, {url : "#"}
                ],
                name : "Search",
                type : "You'll found it",
                genre : ['genre']
            }
        ]
    }})
    const [art, setArt]=  useState('lefa')
    const [src, setSrc] = useState([])

    useEffect(()=>{
      const  spotifyApi  =  new  SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('token'))
      const topArt = spotifyApi.searchArtists(art)
      topArt.then((data)=> setGenre(data))
    }, [art])
    
    const searcher = (e)=>{
        setArt(e.target.value)
    }
    console.log(genre);

    return (
        <div>
            <Header />
            <div>
                <input type='text' onChange={searcher}/>
            </div>
                {/* <img src={genre.album.items[0].images[0].url} alt=""/> */}
                {/* {genre.artists.items[17].images[0] ? <img src={genre.artists.items[0].images[0].url}/> : <span>Siuuuu</span>} */}
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
        </div>
    )
}
    {/* <img src={genre.artists.items[index].images[0].url} alt=""/> */}
    {/* <span>{art.images[2].height}</span> */}