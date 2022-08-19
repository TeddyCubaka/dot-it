import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from './basics/header';
import Track from './basics/musique';

export default function Playlist (){

    const [arti, setArti] = useState("6Te49r3A6f5BiIgBRxH7FH")
    const [getArtists, setGetArtistes] = useState({name : 'sheee'})

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const Album = spotifyApi.getArtistTopTracks("2z2TRvloJt4EfUNQp9rHAi", 'CD')
        Album.then((data)=> setGetArtistes(data))
    }, [])

    console.log(getArtists);

    return (
        <>
            {/* {
                getArtists.tracks ? 
                       getArtists.tracks.map((track, index)=>
                            <Track 
                            indece={index + 1 } 
                            trackName={track.name} 
                            artists={
                                track.artists ? track.artists.map((art)=> <span>{art.name}</span>) : <span>no found</span>
                            } 
                            album={track.album.name} 
                            key={track.id}
                            />
                       )
                 : <span>sheeeesh</span>
            } */}
        </>
        
    )
}