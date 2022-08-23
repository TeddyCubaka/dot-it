import React , { useContext } from "react";
import { urisContext } from "../../userContext/urisContext";

export default function CollectionCard(object) {
  const objects = object;
  const { setUris } = useContext(urisContext);
  return (
    <div
      className="collection-card"
      onClick={() => {
        setUris(objects.object.uri);
        console.log(objects, objects.object.uri);
      }}
    >
      <div>
        {objects.object.album ? (
          <img src={object.object.album.images[0].url} alt="" />
        ) : (
          <span></span>
        )}
        {objects.object.images ? (
          <img src={objects.object.images[0].url} />
        ) : (
          <span></span>
        )}
      </div>
      <div>
        {objects.object.name ? (
          <h4>{objects.object.name} </h4>
        ) : (
          <h4>le nom de type</h4>
        )}
        {objects.object.artists ? (
          <h5> {objects.object.artists[0].name} </h5>
        ) : (
          <h5></h5>
        )}
      </div>
    </div>
  );
}
