import { Icon } from "@rsuite/icons";
import React, { useContext, useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import { urisContext } from "../userContext/urisContext";
import Track from "./basics/musique";

export default function Playlist() {
  const { libraryId } = useContext(urisContext);
  const [searchAlbum, setSearch] = useState({});
  const [searchArt, setSearchArt] = useState({});
  const [searchTrack, setSearchTrack] = useState({});

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    (libraryId.type == "track" ?  spotifyApi.getTrack(libraryId.id).then((data) => setSearchTrack(data)): false);
    (libraryId.type == "album" ? spotifyApi.getAlbum(libraryId.id).then((data) => setSearch(data)) : false);
    (libraryId.type == "artist" ?  spotifyApi.getArtistTopTracks(libraryId.id , "CD").then((data) => setSearchArt(data)): false);
  }, []);

  return (
    <div className="home">
      <div className="playlist-info">
        <div>
          <Link
          to={libraryId.path ? libraryId.path : "/"} 
          className="link link-back">
            <Icon as={FaLongArrowAltLeft} size="40px" color="white"
          />
          </Link>
          <div className="playlist-names">
            { libraryId.name ? <div className="title">{libraryId.name}</div> : false}
            { libraryId.album ? <div className="strong">{libraryId.album.name}</div> : false}
          </div>
        </div>
        <div className="playlist-img">
          {searchAlbum.images ? <img src={searchAlbum.images[0].url} alt=" " /> : false}
          {searchArt.tracks ? <img src={searchArt.tracks[0].album.images[0].url} alt=" " /> : false}
          {searchTrack.album ? <img src={searchTrack.album.images[0].url} alt=" " /> : false}
          <Icon as={FaPlayCircle} size="80px" className="relative-icon" onClick={()=>console.log(libraryId.parentUri)} />
        </div>
      </div>
      <div>
        {searchAlbum.tracks ? (
          searchAlbum.tracks.items.map((track, index) => (
            <Track
              indece={index + 1}
              trackName={track.name}
              artists={
                track.artists ? (
                  track.artists.map((art) => (
                    <span key={art.id}>{art.name}</span>
                  ))
                ) : (
                  false
                )
              }
              album={track.name}
              classname={"track"}
              uri={track.uri}
              key={track.id}
            />
          ))
        ) : (false)}
        {searchArt.tracks ? (
          searchArt.tracks.map((track, index) => (
            <Track
              indece={index + 1}
              trackName={track.name}
              artists={
                track.artists ? (
                  track.artists.map((art) => (
                    <span key={art.id}>{art.name}</span>
                  ))
                ) : (
                  <span>no found</span>
                )
              }
              album={track.album.name}
              classname={"track"}
              uri={track.uri}
              key={track.id}
            />
          ))
        ) : (false)}
        {searchTrack.artists ? 
        <Track
          indece={1}
          trackName={searchTrack.name}
          artists={
            searchTrack.artists ? (
              searchTrack.artists.map((art) => (
                <span key={art.id}>{art.name}</span>
              ))
            ) : (<span>no found</span>)}
          album={searchTrack.album.name}
          classname={"track"}
          uri={searchTrack.uri}
          key={searchTrack.id}
        />
        : (false)}
      </div>
    </div>
  );
}
