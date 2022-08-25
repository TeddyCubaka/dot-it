import "./App.css";
// import "./alternative-app.css";
import "./mobile.css";
import React, { useContext, useEffect, useState } from "react";
import Login from "./component/loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Header from "./component/basics/header";
import Search from "./component/search";
import ViewPlaylist from "./component/viewPlaylist";
import { urisContext } from "./userContext/urisContext";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import NavBarre from "./component/basics/navbarre";
import Loader from "./component/loader";

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

  return (
    <urisContext.Provider value={{ uris, setUris }}>
      <Router>
        <div className="App"></div>
        <Header />
        {window.location.pathname !== "/" ?
        <NavBarre />
        : false}

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/:j" element={<Header />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<ViewPlaylist />} />
          <Route path="/loader" element={<Loader />} ></Route>
        </Routes>
      </Router>
      {window.location.pathname !== "/" ? 
      <div className="bottom all-width">
        {localStorage.getItem("token") !== "" ? 
        <SpotifyWebPlayer
          showSaveIcon={true}
          token={localStorage.getItem("token")}
          uris={[uris]}
          play={true}
        />
        : <span></span>
        }
      </div>
      : <span></span>}
      
    </urisContext.Provider>
  );
}

export default App;