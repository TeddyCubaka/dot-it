import CollectionCard from "./basics/collection-card";
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Header from "./basics/header";
import HelloCard from "./basics/hello-card";
import NavBarre from "./basics/navbarre";

export default function Home (){

    const [topArtiste, setTopArtiste ] = useState({items : [{name : "Teddy", images : [{url : '#'}]}]})
    useEffect(()=>{
      const  spotifyApi  =  new  SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('token'))
      const topArt = spotifyApi.getMyTopArtists()
      topArt.then((data)=> setTopArtiste(data))
  }, [])

    return (
        <div className="home">
            <Header />
            <NavBarre />
            <div className="home-body">
                <h2>Bonjour</h2>
                <div className="hello-collection">
                    <HelloCard elem={topArtiste.items[0]} />
                    <HelloCard elem={topArtiste.items[1]} />
                    <HelloCard elem={topArtiste.items[2]} />
                    <HelloCard elem={topArtiste.items[3]} />
                </div>
                <h2>Vos album</h2>
                <div className="collection-slider">
                    <CollectionCard />
                </div>
            </div>
        </div>
    )
}