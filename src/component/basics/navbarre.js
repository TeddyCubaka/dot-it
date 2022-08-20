import { Icon } from "@rsuite/icons";
import { FaHome, FaMusic } from "react-icons/fa";
import {AiOutlineMenuFold} from "react-icons/ai"
import {FiUser} from 'react-icons/fi'
import {MdLibraryMusic} from 'react-icons/md'
import { Link } from "react-router-dom";

export default function NavBarre (){
    return (
        <button className="nav-barre">
            <legend>
                <Icon as={AiOutlineMenuFold} size="25px" color="white"/>
            </legend>
            <div className="nav-list">
                <div>
                    <Link to='/home' className="link">
                        <Icon as={FaHome} size="30px" color="white" />
                        <span>Accueil</span>
                    </Link>
                </div>
                <div>
                    <Link to='/playlist' className="link">
                        <Icon as={FaMusic} size="30px" color="white" />
                        <span>Playlist</span>
                    </Link>
                </div>
                <div>
                    <Link to='/Artistes' className="link">
                        <Icon as={FiUser} size="30px" color="white" />
                        <span>Artistes</span>
                    </Link>
                </div>
                <div>
                    <Link to='/Albums' className="link">
                        <Icon as={MdLibraryMusic} size="30px" color="white" />
                        <span>Albums</span>
                    </Link>
                </div>
            </div>
        </button>
    )
}
