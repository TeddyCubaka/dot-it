import { useEffect, useState } from 'react';
import { generatePath } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from './basics/header';
import Music from './basics/musique'

export default function Playlist (){

    const [getArtists, setGetArtistes] = useState({name : 'sheee'})
    const [arti, setArti] = useState('')

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const topArt = spotifyApi.getAlbum("0hl8Hs6SM4NfS5TOrkOfRU")
        topArt.then((data)=> setGetArtistes(data))
    }, [])

    getArtists ? console.log(getArtists) : console.log('siuuu');

    const ThisAlbum = () =>{
        return <div>
            <h2> {getArtists.artists[0].name} - {getArtists.name} </h2>
            <img src={getArtists.images[1].url} alt=""/>
            <div>
                {
                    getArtists.tracks.items.map((track)=>
                        <>
                            <ul>
                                <li> {track.name} </li>
                                <li> {track.duration_ms} </li>
                            </ul>
                        </>
                    )
                }
            </div>
        </div>
    }



    return (
        <>
            <Header />
            <ThisAlbum />
            {/* {getArtists.playlists.items.map((list)=>
                    <h2> {getA} </h2>
            )} */}
            {/* <span>{getArtists.playlists.items[0].name}</span> */}
        </>
        
    )
}