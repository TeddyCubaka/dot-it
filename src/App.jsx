import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./component/loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Header from "./component/basics/header";
import Search from "./component/search";
import ViewPlaylist from "./component/viewPlaylist";
import { urisContext } from "./userContext/urisContext";

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

  const [uris, setUris] = useState("");

  return (
    <urisContext.Provider value={{ uris, setUris }}>
      <Router>
        <div className="App"></div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/:j" element={<Header />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<ViewPlaylist />} />
          {/* <Route path="/albums" element={<Album />}></Route> */}
        </Routes>
      </Router>
    </urisContext.Provider>
  );
}

export default App;

// <uris.Provider value={uris}  props={Home}  >
{
  /* </uris.Provider> */
}
