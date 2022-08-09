import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePlayList } from "../../Context/PlayListContext";
const authtoken = localStorage.getItem("AuthToken");

export const CreatPlaylist = () => {
  const { playListState } = usePlayList();
  const { playListDispatch, deletePlayList, addVideoToPlaylist, } = usePlayList();

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
          type: "GET_PlayList",
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

          {playListState.getUserPlayList?.map((video) => {
            const { _id, title } = video;
            return (
              <>
                <div className="playlistmain__container" key={_id}>
                  <Link to={`/playlistVideoCard/${_id}`}>
                    <h3>{title}</h3>
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
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};