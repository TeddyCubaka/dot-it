import  { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const spotifyCotext = createContext({});

const [searcher, setSearcher ] = useState(useContext(spotifyCotext))

useEffect(()=>{
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));

    spotifyApi.getMe().then((data)=> setSearcher(data))
},[])

export { spotifyCotext , searcher };