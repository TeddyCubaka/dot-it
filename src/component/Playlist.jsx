import { Icon } from "@rsuite/icons";
import React, { useContext, useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import { urisContext } from "../userContext/urisContext";
import Track from "./basics/musique";
import TrackList from "./basics/trackList";
import Loader from "./loader";

export default function Playlist() {
  const { libraryId } = useContext(urisContext);
  const [searchTrack, setSearchTrack] = useState({});
  const [array, setArray] = useState([]);
  const [albumImg, setAlbumImg] = useState("");

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    libraryId.type == "track"
      ? spotifyApi.getTrack(libraryId.id).then((data) => {
          setSearchTrack(data);
          setArray(data.available_markets);
        })
      : false;
    libraryId.type == "album"
      ? spotifyApi.getAlbum(libraryId.id).then((data) => {
          setArray(data.tracks.items);
          setAlbumImg(data.images[0].url);
        })
      : false;
    libraryId.type == "artist"
      ? spotifyApi
          .getArtistTopTracks(libraryId.id, "CD")
          .then((data) => {
            setArray(data.tracks);
            setAlbumImg(data.tracks[0].album.images[0].url);
          })
      : false;
  }, []);

  return (
    <div className="home">
      {array.length == 0 ? (
        <Loader />
      ) : (
        <>
          <div className="playlist-info">
            <div>
              <Link
                to={libraryId.path ? libraryId.path : "/home"}
                className="link link-back">
                <Icon as={FaLongArrowAltLeft} size="40px" color="white" />
              </Link>
              <div className="playlist-names">
                {libraryId.name ? (
                  <div className="title">{libraryId.name}</div>
                ) : (
                  false
                )}
                {libraryId.album ? (
                  <div className="strong">{libraryId.album.name}</div>
                ) : (
                  false
                )}
              </div>
            </div>
            <div className="playlist-img">
              {albumImg ? <img src={albumImg} alt=" " /> : false}
              {searchTrack.album ? (
                <img src={searchTrack.album.images[0].url} alt=" " />
              ) : (
                false
              )}
              <Icon
                as={FaPlayCircle}
                size="80px"
                className="relative-icon"
                onClick={() => console.log(libraryId.parentUri)}
              />
            </div>
          </div>
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
