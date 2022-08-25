import { Icon } from "@rsuite/icons";
import { FiMoreVertical } from "react-icons/fi";
import React, { useContext } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { urisContext } from "../../userContext/urisContext";

export default function Track({ indece, trackName, artists, album, classname, uri}) {
  const { setUris, uris } = useContext(urisContext);

  return (
    <div 
    className={
      uri == uris ? `${classname} color-red` : classname
    }
    onClick={()=>{
      setUris(uri);
    }}
    >
      <h3 className="text-center">
      <div>{indece}</div>
      <Icon as={FaPlayCircle} className="hide"/> 
      </h3>
      <div className="text-left">
        <div className="strong"> {trackName} </div>
        <sub className="small">
          {artists} - {album}
        </sub>
      </div>
      <button className="small-menu">
        <legend>
          <Icon as={FiMoreVertical} color={"white"} size={"20px"}
          />
        </legend>
        <ul>
          <li>add to actual playlist</li>
          <li>like this song</li>
        </ul>
      </button>
    </div>
  );
}
