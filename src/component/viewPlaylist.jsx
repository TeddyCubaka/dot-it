import { Icon } from "@rsuite/icons";
import React , { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Header from "./basics/header";
import SpotifyWebApi from "spotify-web-api-js";
import Track from "./basics/musique";
import NavBarre from "./basics/navbarre";
import Playlist from "./Playlist";

export default function ViewPlaylist() {
  const [topArt, setTopArt] = useState({
    items: [{ name: "", images: [{ url: "" }] }],
    name: "",
    images: [{ url: "" }],
  });

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const topArt = spotifyApi.getMyTopTracks();
    topArt.then((data) => setTopArt(data));
  }, []);

  console.log(topArt);

  return (
    <div className="">
      <Header />
      <NavBarre />
      <div className="body">
        <div>
          <div
            className="header-bg-img"
            style={
              {
                // backgroundImage : `url(${topArt.images[0].url})`
              }
            }
          >
            <div className="header-header">
              <Icon as={FaLongArrowAltLeft} size="30px" color="white" />
              <div>
                <strong>Album</strong>
              </div>
            </div>
            <div className="header-details">
              <h1>{topArt.name}</h1>
              <div> {topArt.artists ? topArt.artists[0].name : "  "} </div>
            </div>
          </div>
          <div>
            <Track
              indece={"1"}
              trackName={"track.name"}
              artists={"artiste kaka"}
              album={"getAlbum.name"}
              key={"track.id"}
            />
            {/* {topArt.tracks ? topArt.tracks.items.map((track, index)=> <Track indece={index + 1} trackName={track.name} artists={track.artists[0].name} album={" "} key={track.id}/>) : <span>Echecs</span>} */}
            {topArt.items ? (
              topArt.items.map((track, index) => (
                <Track
                  indece={index + 1}
                  trackName={track.name}
                  artists={track.artists[0].name}
                  album={" "}
                  key={track.id}
                />
              ))
            ) : (
              <span>Echecs</span>
            )}
          </div>
        </div>
        <Playlist title={"playlist en cours"} />
      </div>
    </div>
  );
}
