import CollectionCard from "./basics/collection-card";
import React , { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import HelloCard from "./basics/hello-card";
import Loader from "./loader";

export default function Home() {
  
  const [topArtiste, setTopArtiste] = useState({
    items: [
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
    ],
  });
  const [genre, setGenre] = useState({
    items: [
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
    ]
  });

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const topArt = spotifyApi.getMyTopArtists();
    topArt.then((data) => setTopArtiste(data));
  }, []);

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const topArt = spotifyApi.getMyTopTracks();
    topArt.then((data) => setGenre(data));
  }, []);

  return (
    <div className="home">
      <div className="">
        <h2>Bonjour</h2>
        <div className="hello-collection slider">
          <HelloCard elem={topArtiste.items[0]} />
          <HelloCard elem={topArtiste.items[1]} />
          <HelloCard elem={topArtiste.items[2]} />
          <HelloCard elem={topArtiste.items[3]} />
          <HelloCard elem={topArtiste.items[4]} />
          <Loader />
        </div>
        <h2>Vos chansons les plus écoutées</h2>
        <div className="collection-slider">
          {genre.items ? (
            <div className="slider">
              {genre.items.map((track) => (
                <CollectionCard object={track} key={track.id} />
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <h2>Vos artistes les plus écoutés</h2>
        <div className="slider">
          {topArtiste.items ? (
            topArtiste.items.map((art) => <CollectionCard object={art} key={art.id} />)
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
