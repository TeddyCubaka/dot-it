import React, {  useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Icon } from "@rsuite/icons";
import {  FaSearch } from "react-icons/fa";
import CollectionCard from "./basics/collection-card";

export default function Search() {
  const [album, setAlbum] = useState({});
  const [genre, setGenre] = useState({});
  const [tracks, setTracks] = useState({});
  const [value, setValue] = useState("");

  const searcher = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const topArt = spotifyApi.searchArtists(value);
    topArt.then((data) => setGenre(data));
    const album = spotifyApi.searchAlbums(value);
    album.then((data) => setAlbum(data));
    const tracks = spotifyApi.searchTracks(value);
    tracks.then((data) => setTracks(data));
  }, [value]);


  return (
    <div className="home">
      <div className="home-body">
          <div>
            <div className="div-search">
              <Icon as={FaSearch} color="black" size="30px" />
              <input type="text" onChange={searcher} className="search-input" />
            </div>
          </div>
          <div>
            <h2>Les musique correspondant à votre recherche</h2>
            <div className="afficher">
              {tracks.tracks ? tracks.tracks.items.map((track) => ( <CollectionCard object={track} key={track.id}/>)) : <h1>Commencer votre recherche</h1>}
            </div>
          </div>
          <div>
              {genre.artists ? 
                <>
                  <h2>Les artistes correspondant à votre recherche</h2>
                  <div className="afficher">
                      {genre.artists.items.map((art) => ( <CollectionCard object={art} key={art.id}/>))} 
                  </div>
                </>
              : <span></span>}
          </div>
          <div>
              {album.albums ? 
                <>
                  <h2>Les albums correspondant à votre recherche</h2>
                  <div className="afficher">
                      { album.albums.items.map((albi) => ( <CollectionCard object={albi} key={albi.id}/>))}
                  </div>
                </>
              : <span></span>}
          </div>
      </div>
    </div>
  );
}
