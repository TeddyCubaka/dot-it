import React, { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { urisContext } from "../userContext/urisContext";
import Track from "./basics/musique";

export default function Playlist() {
  const { libraryId } = useContext(urisContext);
  const [SearchAlbum, setSearch] = useState({});
  const [searchArt, setSearchArt] = useState({});
  const [searchTrack, setSearchTrack] = useState({});

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    (libraryId.type == "album" ? spotifyApi.getAlbum(libraryId.id).then((data) => setSearch(data))
    : false);
    (libraryId.type == "artist" ?  spotifyApi.getArtistTopTracks(libraryId.id , "CD").then((data) => setSearchArt(data)): false);
    (libraryId.type == "track" ?  spotifyApi.getTrack(libraryId.id , "CD").then((data) => setSearchTrack(data)): false);
  }, [libraryId]);

  return (
    <div className="home">
      <div>
        {SearchAlbum.images ? <img src={SearchAlbum.images[0].url} alt=" " /> : false}
        {searchArt.tracks ? <img src={searchArt.tracks[0].album.images[0].url} alt=" " /> : false}
        {searchTrack.album ? <img src={searchTrack.album.images[0].url} alt=" " /> : false}
      </div>
      <div>
        {SearchAlbum.tracks ? (
          SearchAlbum.tracks.items.map((track, index) => (
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
        {searchTrack.artists ? 
        <Track
          indece={1}
          trackName={searchTrack.name}
          artists={
            searchTrack.artists ? (
              searchTrack.artists.map((art) => (
                <span key={art.id}>{art.name}</span>
              ))
            ) : (
              <span>no found</span>
            )
          }
          // album={track.album.name}
          classname={"track"}
          uri={searchTrack.uri}
          key={searchTrack.id}
        />
        : (
          <span>Not connect</span>
        )}
      </div>
    </div>
  );
}
