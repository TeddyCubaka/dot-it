import React from "react";
import Track from "./musique";

export default function TackList({ array }) {
  return (
    <>
      <div>
        {array
          ? array.map((track, index) => (
              <>
                {track.track ? (
                  <Track
                    indece={index + 1}
                    trackName={track.track.name}
                    artists={
                      track.track.artists
                        ? track.track.artists.map((art) => (
                            <span key={art.id}>{art.name}</span>
                          ))
                        : false
                    }
                    album={track.track.album.name}
                    classname={"track"}
                    uri={track.track.uri}
                    key={track.track.id}
                  />
                ) : (
                  <Track
                    indece={index + 1}
                    trackName={track.name}
                    artists={
                      track.artists
                        ? track.artists.map((art) => (
                            <span key={art.id}>{art.name}</span>
                          ))
                        : false
                    }
                    album={track.name}
                    classname={"track"}
                    uri={track.uri}
                    key={track.id}
                  />
                )}
              </>
            ))
          : false}
      </div>
    </>
  );
}
