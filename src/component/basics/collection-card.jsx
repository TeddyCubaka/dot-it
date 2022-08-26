import { Icon } from "@rsuite/icons";
import React , { useContext } from "react";
import { urisContext } from "../../userContext/urisContext";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CollectionCard(object   ) {
  const objects = object;
  const { setUris, setLibraryId } = useContext(urisContext);
  return (
    <div
      className="collection-card"
      >
      <Link to="/library" 
      className="link"
      onClick={()=>{
        setLibraryId({id : object.object.id , type : object.object.type, name : object.object.name});
        }}
      >
        <div className="collection-card-img">
          {objects.object.album ? (
            <img src={object.object.album.images[0].url} alt="" />
          ) : (
            <span></span>
          )}
          {objects.object.images && objects.object.images[0] ? (
            <img src={objects.object.images[0].url} />
          ) : (
            <span></span>
          )}
        </div>
        <div className="width-max disp-flex-col height-max">
          {objects.object.name ? (
            <div className="strong">{objects.object.name} </div>
          ) : (
            <div className="strong">le nom de type</div>
          )}
          {objects.object.artists ? (
            <div className="small"> {objects.object.artists[0].name} </div>
          ) : (
            <h5></h5>
          )}
        </div>
      </Link>
        <div 
        className="big-icon-play"
        onClick={() => {
          setUris(objects.object.uri);
        }}
        >
          <Icon as={FaPlayCircle} size="50px" color="red"/>
        </div>
    </div>
  );
}
