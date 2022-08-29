import CollectionCard from "./basics/collection-card";
import React , { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import HelloCard from "./basics/hello-card";

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
  const [playlists, setPlaylists] = useState({});
  const [albums, setAlbums] = useState({});
  const [gospel, setGospel] = useState({});

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const topArt = spotifyApi.getMyTopArtists();
    topArt.then((data) => setTopArtiste(data));
    
    const toTrack = spotifyApi.getMyTopTracks();
    toTrack.then((data) => setGenre(data));

    spotifyApi.searchPlaylists("daily mix afro").then((data) => {
      setPlaylists(data);
    });

    spotifyApi.searchAlbums("daily mix afro").then((data) => {
      setAlbums(data);
    });

    spotifyApi.searchPlaylists("gospel").then((data) => {
      setGospel(data);
    });

  }, []);

  return (
    <div className="home">
      <div>
        <h2>Bonjour</h2>
        <div className="hello-collection slider">
          <HelloCard elem={topArtiste.items[0]} key={topArtiste.items[0].id}/>
          <HelloCard elem={topArtiste.items[1]} key={topArtiste.items[1].id}/>
          <HelloCard elem={topArtiste.items[2]} key={topArtiste.items[2].id}/>
          <HelloCard elem={topArtiste.items[3]} key={topArtiste.items[3].id}/>
          <HelloCard elem={topArtiste.items[4]} key={topArtiste.items[4].id}/>
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
        <h2>Les playlist daily mix afro pourrez vous interressez</h2>
        <div className="slider">
          {playlists.playlists ? (
            playlists.playlists.items.map((playlist) => <CollectionCard object={playlist} key={playlist.id} />)
          ) : (
            <div></div>
          )}
        </div>
        <h2>Des albums</h2>
        <div className="slider">
          {albums.albums ? (
            albums.albums.items.map((playlist) => <CollectionCard object={playlist} key={playlist.id} />)
          ) : (
            <div></div>
          )}
        </div>
        <h2>Un peu de Gospel</h2>
        <div className="slider">
          {gospel.playlists ? (
            gospel.playlists.items.map((playlist) => <CollectionCard object={playlist} key={playlist.id} />)
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
