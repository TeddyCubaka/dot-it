import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Icon } from "@rsuite/icons";
import { FaSearch } from "react-icons/fa";
import CollectionCard from "./basics/collection-card";
// import Loader from "./loader";

export default function Search() {
  const [album, setAlbum] = useState({});
  const [genre, setGenre] = useState({});
  const [tracks, setTracks] = useState({});
  const [value, setValue] = useState("");
  const [Inputvalue, setInputValue] = useState("");

  const searcher = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));

    spotifyApi.searchArtists(value).then((data) => setGenre(data));

    spotifyApi.searchAlbums(value).then((data) => setAlbum(data));

    spotifyApi.searchTracks(value).then((data) => setTracks(data));
  }, [value]);

  return (
    <div className="home">
      <div className="search-zone">
        <form
          className="div-search"
          onSubmit={(e) => {
            e.preventDefault();
            setValue(Inputvalue);
          }}>
          <Icon as={FaSearch} color="black" size="25px" />
          <input type="search" onChange={searcher} className="search-input" />
        </form>
        <button
          className="button-sec search-btn strong color-white"
          onClick={() => {
            setValue(Inputvalue);
          }}>
          Rechercher
        </button>
      </div>
      <div>
        {tracks.tracks ? (
          <>
            <h2>Les musique correspondant à votre recherche</h2>
            <div className="slider">
              {tracks.tracks.items.map((track) => (
                <CollectionCard object={track} type={"track"} key={track.id} />
              ))}
            </div>
          </>
        ) : (
          false
        )}
      </div>
      <div>
        {genre.artists ? (
          <>
            <h2>Les artistes correspondant à votre recherche</h2>
            <div className="slider">
              {genre.artists.items.map((art) => (
                <CollectionCard object={art} type={"artist"} key={art.id} />
              ))}
            </div>
          </>
        ) : (
          <span></span>
        )}
      </div>
      <div>
        {album.albums ? (
          <>
            <h2>Les albums correspondant à votre recherche</h2>
            <div className="slider">
              {album.albums.items.map((albi) => (
                <CollectionCard object={albi} type={"album"} key={albi.id} />
              ))}
            </div>
          </>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
