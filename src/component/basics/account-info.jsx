import { FaChevronDown } from "react-icons/fa";
import { Icon } from "@rsuite/icons";
import SpotifyWebApi from "spotify-web-api-js";
import React, { useEffect, useState } from "react";

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
        <div className="me-image">
          <img className="user-img" src={spotify.images[0].url} alt="" />
        </div>
        <Icon as={FaChevronDown} size="15px" />
      </div>
      <div className="user-details">
        <div>
          {" "}
          <span className="indetif">Nom : </span>
          <strong>{spotify.display_name}</strong>{" "}
        </div>
        <div className="small-police">
          {" "}
          <span className="indetif">Email :</span>
          {spotify.email}
        </div>
      </div>
      <button className="login-button hide">Changer de compter</button>
    </div>
  );
}
