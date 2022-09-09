import "./App.css";
import "./mobile.css";
import React, { useContext, useEffect, useState } from "react";
import Login from "./component/loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Header from "./component/basics/header";
import Search from "./component/search";
import { urisContext } from "./userContext/urisContext";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import NavBarre from "./component/basics/navbarre";
import Playlist from "./component/Playlist";
function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      localStorage.setItem(
        "token",
        hash.substring(1).split("&")[0].split("=")[1],
      );
    }
  }, []);

  const [uris, setUris] = useState(useContext(urisContext));
  const [library, setLibrary] = useState(useContext(urisContext));
  const [libraryId, setLibraryId] = useState(useContext(urisContext));

  return (
    <urisContext.Provider
      value={{ uris, setUris, library, setLibrary, libraryId, setLibraryId }}>
      <Router>
        <Header />
        {window.location.pathname !== "/" ? <NavBarre /> : <span></span>}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </Router>
      {window.location.pathname == "/" ? (
        false
      ) : (
        <div className="bottom all-width">
          {uris ? (
            <SpotifyWebPlayer
              showSaveIcon={true}
              token={localStorage.getItem("token")}
              uris={[uris]}
              play={true}
              initialVolume={"0.5"}
            />
          ) : (
            false
          )}
        </div>
      )}
    </urisContext.Provider>
  );
}

export default App;
