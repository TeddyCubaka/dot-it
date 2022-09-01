import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
// import CollectionCard from "./basics/collection-card";
// import PlaylistMain from "./basics/playlistMain";

export default function SavedTracks() {
  const [search, setSearch] = useState({});

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    spotifyApi.getMySavedTracks({ limit: 10 }).then((data) => {
      setSearch(data);
    });
  }, []);
//   console.log(search);

  return (
    <div className="home">
      {search.href ? (
        <>
          <h2>Vos saved tracks</h2>
          <div className="slider">
            {search.items.map((track) => (
              <>
                <span key={track.track.id}> {track.track.name} </span>
              </>
            ))}
          </div>
        </>
      ) : (
        <span>No impossible</span>
      )}
    </div>
  );
}
