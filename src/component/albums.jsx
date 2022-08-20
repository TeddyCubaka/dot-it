import Header from "./basics/header";
import NavBarre from "./basics/navbarre";
import Playlist from "./Playlist";

export default function Album (){
    return <>
        <Header />
        <NavBarre />
        <div className="body">
            <div className="albums-collection"></div>
            <Playlist title={'playlist en cours'} />
        </div>
    </>
}