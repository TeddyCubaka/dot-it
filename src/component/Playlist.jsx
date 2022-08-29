import React, { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { urisContext } from "../userContext/urisContext";
import Track from "./basics/musique";
import PlaylistMain from "./basics/playlistMain";
import TrackList from "./basics/trackList";
import Loader from "./loader";

export default function Playlist() {
  const { libraryId } = useContext(urisContext);
  const [searchTrack, setSearchTrack] = useState({});
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState({});
  // const [albumImg, setAlbumImg] = useState("");

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    libraryId.type == "track"
      ? spotifyApi.getTrack(libraryId.id).then((data) => {
          setSearchTrack(data);
          setArray(data.available_markets);
          setSearch(data);
        })
      : false;
    libraryId.type == "album"
      ? spotifyApi.getAlbum(libraryId.id).then((data) => {
          setArray(data.tracks.items);
          // setAlbumImg(data.images[0].url);
        })
      : false;
    libraryId.type == "artist"
      ? spotifyApi.getArtistTopTracks(libraryId.id, "CD").then((data) => {
          setArray(data.tracks);
          // setAlbumImg(data.tracks[0].album.images[0].url);
        })
      : false;
    libraryId.type == "artist"
      ? spotifyApi.getArtist(libraryId.id).then((data) => {
          // console.log(data);
          setSearch(data);
        })
      : false;
  }, []);

  console.log(search);

  return (
    <div className="home">
      {array.length == 0 ? (
        <Loader />
      ) : (
        <>
          {search.type && libraryId.type == "artist" ? (
            <PlaylistMain
              image={search.images ? search.images[0].url : false}
              name={search.name}
              type={"Genre"}
              typeName={search.genres}
              description={"Followers"}
              number={search.followers.total}
              path={libraryId.path}
            />
          ) : (
            false
          )}
          {search && libraryId.type == "track" ? (
            <PlaylistMain
              image={search.album ? search.album.images[0].url : false}
              name={search.name}
              type={"Album"}
              typeName={search.album.name}
              description={"Durée"}
              number={
                Math.floor(search.duration_ms / 60000) +
                " min " +
                Math.round(
                  (search.duration_ms / 60000 -
                    Math.floor(search.duration_ms / 60000)) *
                    60,
                ) +
                " sec"
              }
              path={libraryId.path}
              uri={search.uri}
            />
          ) : (
            false
          )}
          <div>
            {searchTrack.artists ? (
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
                album={searchTrack.album.name}
                classname={"track"}
                uri={searchTrack.uri}
                key={searchTrack.id}
              />
            ) : array ? (
              <TrackList array={array} />
            ) : (
              false
            )}
          </div>
        </>
      )}
    </div>
  );
}
