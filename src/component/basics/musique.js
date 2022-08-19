import { Icon } from "@rsuite/icons";
import {FiMoreVertical} from 'react-icons/fi'

export default function Track ({indece, trackName, artists, album}){
    return (
        <div className="track">
            <h3> {indece} </h3>
            <div>
                <div> {trackName} </div>
                <sub> {artists} - {album} </sub>
            </div>
            <button>
                <legend>
                    <Icon as={FiMoreVertical} color={'white'}/>
                </legend>
                <ul>
                    <li>add to actual playlist</li>
                    <li>like this song</li>
                </ul>
            </button>
        </div>
    )
}