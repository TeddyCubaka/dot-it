import React, { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { urisContext } from "../userContext/urisContext";
import Track from "./basics/musique";

export default function Playlist() {
  const { libraryId } = useContext(urisContext);
  const [search, setSearch] = useState({});
  const [searchArt, setSearchArt] = useState({});
  
  console.log(libraryId);

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    (libraryId.type == "album" ? spotifyApi.getAlbum(libraryId).then((data) => setSearch(data))
    : false);
    (libraryId.type == "artist" ?  spotifyApi.getArtistTopTracks(libraryId.id , "CD").then((data) => setSearchArt(data)): false);
  }, [libraryId]);

  console.log(searchArt);

  return (
    <div className="home">
      <div>
        {search.images ? <img src={search.images[0].url} alt=" " /> : false}
        {searchArt.tracks ? <img src={searchArt.tracks[0].album.images[0].url} alt=" " /> : false}
      </div>
      <div>
        {search == {} ? (
          search.tracks.items.map((track, index) => (
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
              // album={track.album.name}
              classname={"track"}
              uri={track.uri}
              key={track.id}
            />
          ))
        ) : (
          <span>Not connect</span>
        )}
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
              // album={track.album.name}
              classname={"track"}
              uri={track.uri}
              key={track.id}
            />
          ))
        ) : (
          <span>Not connect</span>
        )}
      </div>
    </div>
  );
}
