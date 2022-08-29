import { Icon } from "@rsuite/icons";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function PlaylistMain() {
  return (
      <div className="playlist-main">
        <div>
          <Link to="/home">
            <Icon as={FaLongArrowAltLeft} size="40px" color="white"/>
          </Link>
        </div>
        <div className="playlist-img">
          <img
            src="https://i1.sndcdn.com/artworks-000231891000-378ga8-t500x500.jpg"
            alt=""
          />
        </div>
        <div className="main-description">
          <h1>Object name</h1>
          <div>Type : album</div>
          <div>
            Date de sortie : <span className="strong">20/12/2002</span>
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
