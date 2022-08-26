import React , { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Track from "./basics/musique";



export default function Playlist() {

  const [myPlaylist, setMyPlayList] = useState({ name: "my top tracks" });

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const Album = spotifyApi.getArtistTopTracks("7lMgpN1tEBQKpRoUMKB8iw", "cd");
    Album.then((data) => setMyPlayList(data));
  }, []);

  console.log(myPlaylist);

  return (
    <div className="home">
      <h2> {myPlaylist.tracks[0].artists[0].name} </h2>
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
          <span>Not connect</span>
        )}
      </div>
    </div>
  );
}
