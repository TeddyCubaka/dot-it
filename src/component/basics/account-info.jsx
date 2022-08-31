import SpotifyWebApi from "spotify-web-api-js";
import React , { useEffect, useState } from "react";
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

    spotifyApi.getMe().then((data) => setSpotify(data));
  }, []);

  return (
    <div className="user-info">
      <div className="user-image">
        <img className="user-img" src={spotify.images[0].url} alt="" />
      </div>
      <div className="user-details color-black">
        <div className="strong">{spotify.display_name}</div>
      </div>
      <button className="login-button button strong color-white hide" onClick={()=>{localStorage.removeItem("token");}}>
        <Link  to="/" className="link">
          Changer de compter
        </Link>
      </button>
    </div>
  );
}
