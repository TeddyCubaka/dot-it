import React , { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Track from "./basics/musique";



export default function Playlist() {

  const [myPlaylist, setMyPlayList] = useState({ name: "my top tracks" });

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const Album = spotifyApi.getMyTopTracks();
    Album.then((data) => setMyPlayList(data));
  }, []);

  return (
    <div className="home">
      <h2>  </h2>
      <div>
        {myPlaylist.items ? (
          myPlaylist.items.map((track, index) => (
            <Track
              indece={index + 1}
              trackName={track.name}
              artists={
                track.artists ? (
                  track.artists.map((art) => <span key={art.id}>{art.name}</span>)
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
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
