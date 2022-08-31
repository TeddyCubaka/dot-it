import { FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Icon } from "@rsuite/icons";
import SpotifyWebApi from "spotify-web-api-js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserInfo() {
  const [spotify, setSpotify] = useState({
    display_name: "  ",
    images: [{ url: " " }],
    country: " ",
  });

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const me = spotifyApi.getMe();
    me.then((data) => setSpotify(data));
  }, []);

  return (
    <div className="user-info">
      <div className="user-info-icons">
        <div className="user-image">
          {spotify.images.length ? (
            <img
              className="user-img"
              src={spotify.images ? spotify.images[0].url : false}
              alt=""
            />
          ) : (
            <Icon as={CgProfile} size="40px" color="#393938" />
          )}
        </div>
        <Icon
          as={FaChevronDown}
          size="15px"
          className="user-icon color-black"
        />
      </div>
      <div className="user-details color-black hide-mobile">
        <div>
          <span className="hide">Nom : </span>
          <strong>{spotify.display_name}</strong>{" "}
        </div>
        <div className="small-police">
          <span className="hide">Email :</span>
          {spotify.email}
        </div>
      </div>
      <button
        className="login-button button strong color-white hide"
        onClick={() => {
          localStorage.removeItem("token");
        }}>
        <Link to="/" className="link">
          Changer de compter
        </Link>
      </button>
    </div>
  );
}
