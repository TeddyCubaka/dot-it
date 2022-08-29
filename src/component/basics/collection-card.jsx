import { Icon } from "@rsuite/icons";
import React , { useContext } from "react";
import { urisContext } from "../../userContext/urisContext";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CollectionCard(object) {
  const { setUris, setLibraryId } = useContext(urisContext);
  return (
    <div
      className="collection-card"
      key={object.id}
      >
      <Link 
      to="/library" 
      onClick={()=>{
        setLibraryId({id : object.object.id , 
                      type : object.object.type, 
                      name : object.object.artists ? object.object.artists[0].name : false, 
                      album : object.object.album ? object.object.album.name : false,
                      parentUri : object.object.uri,
                      path : window.location.pathname});
      }}
      className="link">
        <div className="collection-card-img">
          {object.object.album ? (
            <img src={object.object.album.images[0].url} alt="" />
          ) : (
            false
          )}
          {object.object.images && object.object.images[0] ? (
            <img src={object.object.images[0].url} />
          ) : (
            false
          )}
        </div>
        <div className="width-max disp-flex-col height-max">
          {object.object.name ? (
            <div className="strong">{object.object.name} </div>
          ) : (
            <div className="strong">le nom de type</div>
          )}
          {object.object.artists ? (
            <div className="small"> {object.object.artists[0].name} </div>
          ) : (
            false
          )}
        </div>
      </Link>
        <div 
        className="big-icon-play"
        onClick={() => {
          setUris(object.object.uri);
        }}
        >
          <Icon as={FaPlayCircle} size="50px" color="red"/>
        </div>
    </div>
  );
}
