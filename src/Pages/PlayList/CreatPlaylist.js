import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { usePlayList } from "../../Context/PlayListContext";
// import { Navigate } from 'react-router-dom';
const authtoken = localStorage.getItem("AuthToken");

export const CreatPlaylist = () => {
  const { playListState } = usePlayList();
  const { playListDispatch, deletePlayList, addVideoToPlaylist } =
    usePlayList();

  console.log(playListState, "9090");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: {
            authorization: authtoken,
          },
        });

        console.log("response", response.data.playlists);
        playListDispatch({
          type: "ADD_TO_PlayList",
          payload: response.data.playlists,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="videos">
        <div className="playcontainer__container">
          {console.log(playListState, "000")}

          {playListState.PlayListVideo?.map((video) => {
            const { _id, title } = video;

            return (
              <>
                <div className="playlistmain__container" key={_id}>
                  <div className="videos_1">
                    <div className="icons_container">
                      <div className="border_radios_deletes">
                        <div
                          className="border_radios_playlist"
                          onClick={() => deletePlayList(_id, playListDispatch)}
                        >
                          <i className="material-icons">delete</i>
                        </div>
                      </div>
                    </div>

                    <div className="video__details">
                      <div
                        className="title"
                        onClick={() =>
                          addVideoToPlaylist(video, playListDispatch)
                        }
                      >
                        <h3>{title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
