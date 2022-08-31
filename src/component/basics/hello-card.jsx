import { Icon } from "@rsuite/icons";
import { FaPlayCircle } from "react-icons/fa";
import React, { useContext } from "react";
import "./images/disque.png";
import { urisContext } from "../../userContext/urisContext";
import {  Link } from "react-router-dom";

export default function HelloCard(elem) {
  const { setUris, setLibraryId } = useContext(urisContext);
    return (
      elem ? 
        <div 
        className="hello-card"
        onClick={()=>{
          setLibraryId({id : elem.elem.id , type : elem.elem.type, name : elem.elem.name});
        }}
        >
          <Link to="/library" className="link">
            <div className="hello-card-div-img">
                <img src={elem.elem.images[0].url} alt="" />
            </div>
            <div className="small-title">{elem.elem.name}</div>
          </Link>
          <div 
          className="big-icon-play"
          onClick={()=>{
            setUris(elem.elem.uri);
          }}
          >
            <Icon as={FaPlayCircle} size="50px" color="red" />
          </div>
        </div>
        : <div className="hello-card">
            <h4>...</h4>
        </div>
    );
}
