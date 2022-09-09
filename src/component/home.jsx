import CollectionCard from "./basics/collection-card";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import HelloCard from "./basics/hello-card";
import { Icon } from "@rsuite/icons";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

export default function Home() {
  const [topArtiste, setTopArtiste] = useState({
    items: [
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
    ],
  });
  const [genre, setGenre] = useState({
    items: [
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
      { name: "", images: [{ url: "" }] },
    ],
  });
  const [playlists, setPlaylists] = useState({});
  const [albums, setAlbums] = useState({});
  const [gospel, setGospel] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));

    spotifyApi.getMyTopArtists().then((data) => setTopArtiste(data));

    spotifyApi.getMyTopTracks().then((data) => setGenre(data));

    spotifyApi.searchPlaylists("daily mix afro").then((data) => {
      setPlaylists(data);
    });

    spotifyApi.searchAlbums("daily mix afro").then((data) => {
      setAlbums(data);
    });

    spotifyApi.searchPlaylists("gospel").then((data) => {
      setGospel(data);
    });

    spotifyApi.getMe().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <div className="home">
      <div>
        {user.items ? (
          <>
            <h2>Bonjour</h2>
            <div className="slider hello-collection">
              <HelloCard
                elem={user}
                image={user.items[0].track.album.images[0].url}
                title={"vos titres likés"}
                key={topArtiste.items[0].id}
              />
            </div>
          </>
        ) : (
          <>
            <div className="big-title">Bonjour {user.display_name}  <Icon as={BsEmojiSmileUpsideDown} size={"30px"} /></div>
          </>
        )}
        <h2>Vos chansons les plus écoutées</h2>
        <div className="collection-slider">
          {genre.items ? (
            <div className="slider">
              {genre.items.map((track) => (
                <CollectionCard object={track} key={track.id} />
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <h2>Vos artistes les plus écoutés</h2>
        <div className="slider">
          {topArtiste.items ? (
            topArtiste.items.map((art) => (
              <CollectionCard object={art} key={art.id} />
            ))
          ) : (
            <div></div>
          )}
        </div>
        <h2>Les playlist daily mix afro pourrez vous interressez</h2>
        <div className="slider">
          {playlists.playlists ? (
            playlists.playlists.items.map((playlist) => (
              <CollectionCard object={playlist} key={playlist.id} />
            ))
          ) : (
            <div></div>
          )}
        </div>
        <h2>Des albums</h2>
        <div className="slider">
          {albums.albums ? (
            albums.albums.items.map((playlist) => (
              <CollectionCard object={playlist} key={playlist.id} />
            ))
          ) : (
            <div></div>
          )}
        </div>
        <h2>Un peu de Gospel</h2>
        <div className="slider">
          {gospel.playlists ? (
            gospel.playlists.items.map((playlist) => (
              <CollectionCard object={playlist} key={playlist.id} />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
