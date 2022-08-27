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
        hash.substring(1).split("&")[0].split("=")[1],window.location.hash
      );
    }
  }, [window.location.hash]);

  const [uris, setUris] = useState(useContext(urisContext));
  const [library, setLibrary] = useState(useContext(urisContext));
  const [libraryId, setLibraryId] = useState(useContext(urisContext));

  return (
    <urisContext.Provider value={{ uris, setUris, library, setLibrary, libraryId, setLibraryId }}>
      <Router>
        <div className="App"></div>
        <Header />
        {localStorage.getItem("token") !== "" ? <NavBarre /> : false}

        <Routes>
          <Route exact path="/" element={ localStorage.getItem("token") ? <Home /> : <Login />} />
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/:j" element={<Header />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Playlist />} />
        </Routes>
      </Router>
      {localStorage.getItem("token") ? 
        <div className="bottom all-width">
          {localStorage.getItem("token") && localStorage.getItem("token") !== "" ? 
          <SpotifyWebPlayer
            showSaveIcon={true}
            token={localStorage.getItem("token")}
            uris={[uris]}
            play={true}
          />
          : false
          }
        </div>
        : <span></span>}
      
    </urisContext.Provider>
  );
}

export default App;