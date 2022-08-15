import { Icon } from "@rsuite/icons";
import { FaHome, FaMusic } from "react-icons/fa";
import {AiOutlineMenuFold} from "react-icons/ai"
import {FiUser} from 'react-icons/fi'
import {MdLibraryMusic} from 'react-icons/md'

export default function NavBarre (){
    return (
        <button className="nav-barre">
            <legend>
                <Icon as={AiOutlineMenuFold} className="icon" size="25px" color="white"/>
            </legend>
            <div className="nav-list">
                <div>
                    <Icon as={FaHome} size="30px" color="white" />
                    <span>Accueil</span>
                </div>
                <div>
                    <Icon as={FaMusic} size="30px" color="white" />
                    <span>Playlist</span>
                </div>
                <div>
                    <Icon as={FiUser} size="30px" color="white" />
                    <span>Artistes</span>
                </div>
                <div>
                    <Icon as={MdLibraryMusic} size="30px" color="white" />
                    <span>Albums</span>
                </div>
            </div>
        </button>
    )
}
