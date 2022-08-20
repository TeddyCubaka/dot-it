import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

export default function CollectionCard (object){
    const objects = object;    

    return (
        <div 
        className="collection-card"
        onClick={()=>{ 
            console.log(objects.object.artists[0].id)
         }}
        >
            <div>
                {objects.object.album ? 
                <img src={object.object.album.images[0].url} alt=''/>
                 :
                 <span></span>}
                 {/* <img src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg" alt=""/> */}
                 {objects.object.images ? <img src={objects.object.images[0].url} /> : <span></span> }

            </div>
            <div>
                {objects.object.name ? <h2>{objects.object.name} </h2> : <h2>le nom de type</h2>}
                {objects.object.artists ? <h2> {objects.object.artists[0].name} </h2> : <h2></h2>}
            </div>
        </div>
    )
}