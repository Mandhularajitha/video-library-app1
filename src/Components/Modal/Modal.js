import React from "react";
import { useState } from "react";
import { usePlayList } from "../../Context/PlayListContext";
import "./Modal.css";

export const Modal = ({data:{singleVideoData,setModalVisible}}) => {
  const { playListState,playListDispatch, addToPlayList, createPlaylist,addVideoToPlaylist } =
    usePlayList();

  const { createUserPlaylist, selectedPlaylist } = playListState;

  const [userList, setUserList] = useState({title:""});

  const userInputHandler = (e) => {
    setUserList({title:e.target.value});
  };
  console.log(createUserPlaylist,"playlist");
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
                onChange={() => {
                  setModalVisible(false)
                  addVideoToPlaylist(singleVideoData,data._id, playListDispatch)
                }}
                type="checkbox"
              />

              {data.title}
            
            </div>
          );
        })}

        <button
          className="btn modal-btn"
          onClick={() => {
            setModalVisible(false)
            playListDispatch({ type: "MODAL_CLOSE" })}}
        >
          X
        </button>

        <input
          className="modal-input"
          name="title"
          value={userList.title}
          type="text"
          onChange={e => userInputHandler(e)}
        />

        <button
          className="playList-btn"
          onClick={() =>
            createPlaylist(userList,playListDispatch)
          }
        >
          <button>Create Playlist</button>
        </button>
      </div>
    </div>
  );
};
