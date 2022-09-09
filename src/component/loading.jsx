import React from "react";
import Home from "./home";

export default function Login() {
  const handleClick = () => {
    const clientId = "7b5690c371ee4e86ae586449d5a95703";
    const redirectUrl =
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000/home"
        : "https://dot-it.vercel.app/home";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
      "user-follow-modify",
      "user-follow-read",
      "playlist-read-collaborative",
      "playlist-modify-public",
      "playlist-read-private",
      "playlist-modify-private",
      "user-library-modify",
      "user-library-read",
      "app-remote-control",
      "streaming",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " ",
    )}&response_type=token&show_dialog=true`;
  };

  return localStorage.getItem("token") ? (
    <Home />
  ) : (
    <div className="body">
      <div className="login">
        <div className="big-logo logo disp-flex-col">
          <div className="big-logo-illustration logo-illustration">
            <div>
              <div></div>
            </div>
          </div>
          <span>Dot it</span>
        </div>
        <div className="text text-center strong .text-h-30px">
          Savoir votre musique, importer depuis spotify, sous une interface
          différent et fascinant !
        </div>
        <button
          onClick={handleClick}
          className="login-button button strong color-white">
          Login with spotify
        </button>
      </div>
    </div>
  );
}
