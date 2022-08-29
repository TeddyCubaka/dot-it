import { Icon } from "@rsuite/icons";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function PlaylistMain({name, image, type, typeName, description, number}) {
    // const description = "date de sortie";
    // const number = "20/06/2003";
  return (
      <div className="playlist-main">
        <div>
          <Link to="/home">
            <Icon as={FaLongArrowAltLeft} size="40px" color="white"/>
          </Link>
        </div>
        <div className="playlist-img">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="main-description">
          <h1> {name} </h1>
          <div>{type} : {typeName}</div>
          <div>
            {description} : <span className="strong"> {number} </span>
          </div>
        </div>
      </div>
  );
}

{
  /* <div className="playlist-info">
        <div>
            <Link
            to={libraryId.path ? libraryId.path : "/home"}
            className="link link-back">
            <Icon as={FaLongArrowAltLeft} size="40px" color="white" />
            </Link>
            <div className="playlist-names">
            {libraryId.name ? (
                <div className="title">{libraryId.name}</div>
            ) : (
                false
            )}
            {libraryId.album ? (
                <div className="strong">{libraryId.album.name}</div>
            ) : (
                false
            )}
            </div>
        </div>
        <div className="playlist-img">
            {albumImg ? <img src={albumImg} alt=" " /> : false}
            {searchTrack.album ? (
            <img src={searchTrack.album.images[0].url} alt=" " />
            ) : (
            false
            )}
            <Icon
            as={FaPlayCircle}
            size="80px"
            className="relative-icon"
            onClick={() => console.log(libraryId.parentUri)}
            />
        </div>
        </div> */
}
