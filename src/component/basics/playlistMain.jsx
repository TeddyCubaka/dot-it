import { Icon } from "@rsuite/icons";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PlaylistMain({name, image, type, typeName, description, number, path, tracks, numberTracks}) {
  return (
    <>
      <div className="playlist-main">
        <div>
          <Link to={path ? path : "/home"} className="bg-overlay">
            <Icon as={FaLongArrowAltLeft} size="40px" color="white" className="arrow-back"/>
          </Link>
        </div>
        <div className="bloc-de-l-image">
          <div className="playlist-img">
            <img
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="main-description">
          <h1> {name} </h1>
          <div>{type} : {typeName}</div>
          <div>
            {description} : <span className="strong"> {number} </span>
          </div>
          {tracks ? <div>
            {tracks} : <span className="strong"> {numberTracks} </span>
          </div> : false}
        </div>
      </div>
    </>
  );
}
