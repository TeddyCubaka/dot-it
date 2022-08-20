import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import CollectionCard from "./basics/collection-card";
import Header from "./basics/header";
import HelloCard from "./basics/hello-card";
import NavBarre from "./basics/navbarre";
import Playlist from "./Playlist";

export default function ViewPlaylist (){
    return (
        <div className="">
            <Header />
            <NavBarre />
            <div className="body">
                <div>
                    
                </div>
                <Playlist title={'playlist en cours'} />
            </div>
        </div>
    )
}