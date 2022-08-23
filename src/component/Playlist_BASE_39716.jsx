import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Track from "./basics/musique";

export default function Playlist({ title }) {
  const [getArtistTopTracks, setGetArtistTopTracks] = useState({
    name: "artiste",
    second: "pour embêter",
  });
  const [getAlbum, setGetAlbum] = useState({ name: "album" });
  const [myPlaylist, setMyPlayList] = useState({ name: "my top tracks" });

  const [ident, setIdent] = useState("");
  // setIdent(id);

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const Album = spotifyApi.getArtistTopTracks(`${ident}`, "CD");
    Album.then((data) => setGetArtistTopTracks(data));
  }, []);

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const Album = spotifyApi.getAlbum(ident);
    Album.then((data) => setGetAlbum(data));
  }, []);

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const Album = spotifyApi.getMyTopTracks("6Te49r3A6f5BiIgBRxH7FH");
    Album.then((data) => setMyPlayList(data));
  }, []);

  return (
    <div className="playlist">
      <h2> {title} </h2>
      <div>
        {myPlaylist.items ? (
          myPlaylist.items.map((track, index) => (
            <Track
              indece={index + 1}
              trackName={track.name}
              artists={
                track.artists ? (
                  track.artists.map((art) => <span>{art.name}</span>)
                ) : (
                  <span>no found</span>
                )
              }
              album={getAlbum.name}
              key={track.id}
            />
          ))
        ) : (
          <span></span>
        )}
        {getArtistTopTracks.tracks ? (
          getArtistTopTracks.tracks.map((track, index) => (
            <Track
              indece={index + 1}
              trackName={track.name}
              artists={
                track.artists ? (
                  track.artists.map((art) => (
                    <span key={art.id}>{art.name} ,</span>
                  ))
                ) : (
                  <span>no found</span>
                )
              }
              album={track.album.name}
              key={track.id}
            />
          ))
        ) : (
          <span></span>
        )}
        {getAlbum.tracks ? (
          getAlbum.tracks.items.map((track, index) => (
            <Track
              indece={index + 1}
              trackName={track.name}
              artists={
                track.artists ? (
                  track.artists.map((art) => <span>{art.name}</span>)
                ) : (
                  <span>no found</span>
                )
              }
              album={getAlbum.name}
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
