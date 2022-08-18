import { Icon } from '@rsuite/icons';
import { FaSearch } from 'react-icons/fa';
import UserInfo from './account-info';
import React, { useEffect, useRef, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js'

export default function Header() {

    // const input = useRef()
    // const [genre, setGenre]=useState([])
    // const [art, setArt]=  useState('')

    // useEffect(()=>{
    //   const  spotifyApi  =  new  SpotifyWebApi();
    //   spotifyApi.setAccessToken(localStorage.getItem('token'))
    //   const topArt = spotifyApi.searchArtists(art)
    //   topArt.then((data)=> setGenre(data))
    // }, [art])
    
    // const searcher = (e)=>{
    //     setArt(e.target.value)
    //     // console.log();
    // }

    return (
        <header>
                <div className="logo">
                    <div className='logo-illustration'>
                        <div><div></div></div>
                    </div>
                    <span>Dot It</span>
                </div>
                <div className='search'>
                    <Icon as={FaSearch} color='#F5F5F5' size="30px" className='icon-search'/>
                    {/* <input type="text" className="search-input" onChange={searcher}/> */}
                </div>
                <UserInfo />
        </header>
    );
}