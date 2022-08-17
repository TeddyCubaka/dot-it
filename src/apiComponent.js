import { FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { Icon } from '@rsuite/icons';
import SpotifyWebApi from 'spotify-web-api-js';
import { useEffect, useRef, useState } from 'react';


export function GetMe (){
    const [spotify, setSpotify] = useState({display_name : "  ", images : [{url : ' '}], country : ' '})

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        // console.log(spotifyApi.getMe());
        const me = spotifyApi.getMe()
        me.then((data) => setSpotify(data))

    }, [] )

  console.log(spotify)
    return spotify
}