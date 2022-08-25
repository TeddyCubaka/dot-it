import { Icon } from "@rsuite/icons";
import { FaPlayCircle } from "react-icons/fa";
import React, { useContext } from "react";
import "./images/disque.png";
import { urisContext } from "../../userContext/urisContext";

export default function HelloCard(elem) {
  const { setUris } = useContext(urisContext);
    return (
      elem ? 
      <div className="hello-card">
        <div>
          <img src={elem.elem.images[0].url} alt="" />
          <h4>{elem.elem.name}</h4>
        </div>
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
