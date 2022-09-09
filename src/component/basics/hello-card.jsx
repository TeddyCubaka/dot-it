import { Icon } from "@rsuite/icons";
import { FaPlayCircle } from "react-icons/fa";
import React, { useContext } from "react";
import "./images/disque.png";
import { urisContext } from "../../userContext/urisContext";
import {  Link } from "react-router-dom";

export default function HelloCard({elem, image, title}) {
  const { setUris, setLibraryId } = useContext(urisContext);
    return (
        <div 
        className="hello-card"
        onClick={()=>{
          setLibraryId({id : elem.elem.id , type : elem.elem.type, name : elem.elem.name});
        }}
        >
          <Link to="/playlist" className="link">
            <div className="hello-card-div-img">
              {image ?  <img src={image} alt="" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" alt=""/>}
            </div>
            <div className="small-title">{title ? title : " "}</div>
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
    );
}
