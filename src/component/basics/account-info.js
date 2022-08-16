import { FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { Icon } from '@rsuite/icons';
import SpotifyWebApi from 'spotify-web-api-js';
import { useEffect, useState } from 'react';

export default function UserInfo (){

    const [spotify, setSpotify] = useState([])

    useEffect(()=>{
        const  spotifyApi  =  new  SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'))
        console.log(spotifyApi.getMe());
        const me = spotifyApi.getMe()
        me.then((data) => setSpotify(data))
    
      }, [] )
    
      console.log(spotify)


    return (
        <div className="user-info">
            <div className="user-info-icons">
                <Icon as={ FaUserCircle } size="35px"/>
                <Icon as={ FaChevronDown } size="15px"/>
            </div>
            <div className='user-details'>
                <div>
                <span className="indetif">Nom : </span>
                <strong>{spotify.display_name}</strong></div>
                <div><span className="indetif">Email :</span>{spotify.email}</div>
            </div>
            <button className='login-button hide'>Changer de compter</button>
        </div>
    )
}