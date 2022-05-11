import React from "react";
import { useState } from "react";
import { usePlayList } from "../../Context/PlayListContext";
import "./Modal.css";

export const Modal = () => {
    
  const { playListState, playListDispatch,addToPlayList,createPlaylist} = usePlayList();
    
  const { createUserPlaylist, selectedPlaylist } = playListState;

  const [userList, setUserList] = useState("");

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserList({ ...userList, [name]: value });
  };

  return (
    <div className="modal-main-container">
      <div className="modal-container">
          <div className="creatplaylist">
          <h2>Creat New PlayList</h2>
          </div>
    
        {createUserPlaylist.map((data) => {
          const isVideo = data.videos.filter(
            (video) => video._id === selectedPlaylist._id
          );

          return (
            <div className="modal-input-wrapper">

              <input
                style={{ width: "5rem" }}
                className="playlist-checkbox"
                onChange={() =>
                    addToPlayList(selectedPlaylist, data._id,playListDispatch)
                }
    
                type="checkbox"
                checked={isVideo}
              />

              {data.title}
            {
                console.log(data.title,"44444")
            }
            </div>
          );
        })}

        <button
          className="btn modal-btn"
          onClick={() => playListDispatch({ type: "MODAL_CLOSE" })}
        >
          X
        </button>
        <input
          className="modal-input"
          name="title"
          value={userList.title}
          type="text"
          onChange={userInputHandler}
        />

        <button
          className="playList-btn"
          onClick={() =>
            createPlaylist(userList,playListDispatch, setUserList)
          }
        >
          <h4>Create Playlist</h4>
        </button>
      </div>
    </div>
  );
};
