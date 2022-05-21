import React from "react";
import { useState } from "react";
import { usePlayList } from "../../Context/PlayListContext";
import "./Modal.css";

export const Modal = ({selectedvideo}) => {
  const { playListState,playListDispatch, addToPlayList, createPlaylist,addVideoToPlaylist } =
    usePlayList();

  const { createUserPlaylist, selectedPlaylist } = playListState;

  const [userList, setUserList] = useState({title:""});

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
            <div className="modal-input-wrapper" key={data._id}>
              <input
                style={{ width: "5rem" }}
                className="playlist-checkbox"
                // checked={checkvideoInplaylist} 
                onChange={() =>
                  addVideoToPlaylist(selectedvideo,data._id, playListDispatch)
                }
                type="checkbox"
              />

              {data.title}
            
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
