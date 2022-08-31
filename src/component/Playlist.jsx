import React, { useContext, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { urisContext } from "../userContext/urisContext";
import Track from "./basics/musique";
import PlaylistMain from "./basics/playlistMain";
import TrackList from "./basics/trackList";
import Loader from "./loader";

export default function Playlist() {
  const { libraryId } = useContext(urisContext);
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState({});

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    libraryId.type == "track"
      ? spotifyApi.getTrack(libraryId.id).then((data) => {
          setArray(data.available_markets);
          setSearch(data);
        })
      : false;
    libraryId.type == "album"
      ? spotifyApi.getAlbum(libraryId.id).then((data) => {
          setArray(data.tracks.items);
          setSearch(data);
        })
      : false;
    libraryId.type == "artist"
      ? spotifyApi.getArtistTopTracks(libraryId.id, "CD").then((data) => {
          setArray(data.tracks);
        })
      : false;
    libraryId.type == "artist"
      ? spotifyApi.getArtist(libraryId.id).then((data) => {
          setSearch(data);
        })
      : false;
    libraryId.type == "playlist"
      ? spotifyApi.getPlaylist(libraryId.id, { limit: "20" }).then((data) => {
          console.log(data);
          setSearch(data);
          setArray(data.tracks.items);
        })
      : false;
  }, []);

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
          {search && libraryId.type == "album" ? (
            <PlaylistMain
              image={search.images ? search.images[0].url : false}
              name={search.name}
              type={"Artiste"}
              typeName={search.artists[0].name}
              description={"Date de sortie"}
              number={search.release_date}
              path={libraryId.path}
              uri={search.uri}
              tracks={"Nombre des tracks"}
              numberTracks={search.total_tracks}
            />
          ) : (
            false
          )}
          {search && libraryId.type == "playlist" ? (
            <PlaylistMain
              image={search.images ? search.images[0].url : false}
              name={search.name}
              type={"Propriètaire"}
              typeName={search.owner.display_name}
              description={"Description de la playlist"}
              number={search.description}
              path={libraryId.path}
              uri={search.uri}
              tracks={"Nombre des tracks"}
              numberTracks={search.tracks.items.length}
            />
          ) : (
            false
          )}
          <div>
            <div className="main-seprator"></div>
            
            {search.type == "track" ? (
              <Track
                indece={1}
                trackName={search.name}
                artists={
                  search.artists ? (
                    search.artists.map((art) => (
                      <span key={art.id}>{art.name}</span>
                    ))
                  ) : (
                    <span>no found</span>
                  )
                }
                album={search.album.name}
                classname={"track"}
                uri={search.uri}
                key={search.id}
              />
            ) : array ? (
              <>
                {/* <div> {array[0].name} </div> */}
                <TrackList array={array} />
              </>
            ) : (
              false
            )}
          </div>
        </>
      )}
    </div>
  );
}
