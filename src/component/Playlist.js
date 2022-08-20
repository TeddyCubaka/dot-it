import { useEffect, useState } from 'react';
import { MdTrackChanges } from 'react-icons/md';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from './basics/header';
import Track from './basics/musique';

export default function Playlist (){

    const [getArtistTopTracks, setGetArtistTopTracks] = useState({name : 'artiste', second : 'pour embêter'})
    const [getAlbum, setGetAlbum] = useState({name : 'album'})
    const [myPlaylist, setMyPlayList] = useState({name : 'my top tracks'})
    const [tracks, setTracks] = useState([])

    const [ident, setIdent] = useState('')
    // setIdent(id);

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const Album = spotifyApi.getArtistTopTracks( `${ident}` , 'CD')
        Album.then((data)=> setGetArtistTopTracks(data))
    }, [])

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const Album = spotifyApi.getAlbum(ident)
        Album.then((data)=> setGetAlbum(data))
    }, [])

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        const Album = spotifyApi.getMyTopTracks('6Te49r3A6f5BiIgBRxH7FH')
        Album.then((data)=> setMyPlayList(data))
    }, [])

    return (
        <>
            <h2>Vos titres likées</h2>
            {
                myPlaylist.items ? 
                       myPlaylist.items.map((track, index)=>
                            <Track 
                            indece={index + 1 } 
                            trackName={track.name} 
                            artists={
                                track.artists ? track.artists.map((art)=> <span>{art.name}</span>) : <span>no found</span>
                            } 
                            album={getAlbum.name} 
                            key={track.id}
                            />
                       )
                 : <span></span>
            }
            <h2>Les tops de l'artistes</h2>
            {
                getArtistTopTracks.tracks ? 
                       getArtistTopTracks.tracks.map((track, index)=>
                            <Track 
                            indece={index + 1 } 
                            trackName={track.name} 
                            artists={
                                track.artists ? track.artists.map((art)=> <span key={art.id}>{art.name} ,</span>) : <span>no found</span>
                            } 
                            album={track.album.name} 
                            key={track.id}
                            />
                       )
                 : <span></span>
            }
            <h2>Les tracks de l'album</h2>
            {
                getAlbum.tracks ? 
                       getAlbum.tracks.items.map((track, index)=>
                            <Track 
                            indece={index + 1 } 
                            trackName={track.name} 
                            artists={
                                track.artists ? track.artists.map((art)=> <span>{art.name}</span>) : <span>no found</span>
                            } 
                            album={getAlbum.name} 
                            key={track.id}
                            />
                       )
                 : <span></span>
            }
            
        </>
        
    )
}