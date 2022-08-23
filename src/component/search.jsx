import Header from "./basics/header";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import NavBarre from "./basics/navbarre";
import Playlist from "./Playlist";
import { Icon } from "@rsuite/icons";
import { FaPlayCircle, FaSearch } from "react-icons/fa";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";

export default function Search() {
  const [album, setAlbum] = useState({});
  const [genre, setGenre] = useState({});
  const [tracks, setTracks] = useState({});
  const [value, setValue] = useState("teddy");
  const [uris, setUris] = useState("");

  const searcher = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));
    const topArt = spotifyApi.searchArtists(value);
    topArt.then((data) => setGenre(data));
    const album = spotifyApi.searchAlbums(value);
    album.then((data) => setAlbum(data));
    const tracks = spotifyApi.searchTracks(value);
    tracks.then((data) => setTracks(data));
  }, [value]);

  const Artists = () => {
    return (
      <>
        <h1>Artistes correspondant à votre recherche</h1>
        <div className="afficher">
          {genre.artists.items.map((art) => (
            <div className="collection-card" key={art.id}>
              <div>
                {art.images[0] ? (
                  <img src={art.images[0].url} alt="" />
                ) : (
                  <img
                    src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"
                    alt=""
                  />
                )}
              </div>
              <div>
                <h2>{art.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  const Albums = () => {
    return (
      <>
        <h1>Albums correspondant à votre recherche</h1>
        <div className="afficher">
          {album.albums.items.map((albi) => (
            <div className="collection-card" key={albi.id}>
              <div>
                {albi.images[0] ? (
                  <img src={albi.images[0].url} alt="" />
                ) : (
                  <img
                    src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"
                    alt=""
                  />
                )}
              </div>
              <div>
                <h3>{albi.name}</h3>
                <div></div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  const Tracks = () => {
    return (
      <>
        <h1>Musiques trouvées</h1>
        <div className="afficher">
          {tracks.tracks.items.map((track) => (
            <div
              className="collection-card"
              onClick={() => {
                setUris(track.uri);
                 console.log(track.uri);
              }}
              key={track.id}
            >
              <div key={track.artists[0].name}>
                {track.album.images ? (
                  <img src={track.album.images[0].url} alt="" />
                ) : (
                  <img
                    src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"
                    alt=""
                  />
                )}
              </div>
              <div>
                <h4 key={track.artists[0].id}>
                  {track.name} - {track.artists[0].name}{" "}
                </h4>
                {track.album ? (
                  <div>
                    {" "}
                    <strong key={track.album.id}> Album :</strong>{" "}
                    {track.album.name}{" "}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="big-icon-play">
                <Icon as={FaPlayCircle} size="50px" color="red" />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  return (
    <div>
      <Header />
      <NavBarre />
      <div className="body">
        <div>
          <div>
            <div className="div-search">
              <Icon as={FaSearch} color="black" size="30px" />
              <input type="text" onChange={searcher} className="search-input" />
            </div>
          </div>
          <div>
            {tracks.tracks ? <Tracks /> : <h2>Les tracks s"afficherons ici</h2>}
          </div>
          <div>
            {genre.artists ? <Artists /> : <h2>Faites votre recherche ici</h2>}
          </div>
          <div>
            {album.albums ? <Albums /> : <h2>Ouvrez votre recherche ici</h2>}
          </div>
        </div>
        <Playlist />
      </div>
      <div className="bottom">
        <SpotifyWebPlayer
          token={localStorage.getItem("token")}
          uris={[uris]}
          play={true}
        />
        ;
      </div>
    </div>
  );
}
