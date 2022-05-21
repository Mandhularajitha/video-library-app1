import React from "react";
import "./VideoCard.css";
import { videos } from "../../backend/db/videos";
import { useLiked } from "../../Context/LikeContext";
import { useWatchlater } from "../../Context/WatchLaterContext";
import { useHistry } from "../../Context/HistryContext";
import { Modal } from "../../Components/Modal/Modal";
import { useState } from "react";

export const VideoCard = () => {
  const { likedDispatch, addToLike } = useLiked();
  const { watchLaterDispatch, addToWatchlater } = useWatchlater();
  const { historyDispatch, addToHistory } = useHistry();

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedvideo, setSelectedVideo] = useState({});

  return (
    <>
      {modalVisible && (
        <div className="modal-wrapper">
          <div
            className="modal-backdrop"
            onClick={() => setModalVisible((state) => !state)}
          ></div>
          <div className="main-modal">
            <Modal selectedvideo={selectedvideo}/>
          </div>
        </div>
      )}

      <div className="videos">
        <div className="videos__container">
          {videos.map((video) => {
            const { _id, title, thumbnail, chennelProfile, mechennelNa, view } =
              video;
            return (
              <div
                className="videos__container"
                key={_id}
                onClick={() => addToHistory(video, historyDispatch)}
              >
                <div className="video">
                  <div className="video__thumbnail">
                    <img src={thumbnail} alt="" />
                  </div>

                  <div className="icons_1">
                    <div className="border_radios">
                      <div
                        className="border_radios_2"
                        onClick={() => addToLike(video, likedDispatch)}
                      >
                        <i className="material-icons">thumb_up</i>
                      </div>

                      <div
                        className="border_radios_2"
                        onClick={() =>
                          addToWatchlater(video, watchLaterDispatch)
                        }
                      >
                        <i className="material-icons">watch_later</i>
                      </div>

                      <div
                        className="border_radios_2"
                        onClick={() => {
                          setModalVisible((state) => !state);
                          setSelectedVideo(video);
                        }}
                      >
                        <i className="fas fa-sliders-h"></i>
                      </div>
                    </div>
                  </div>

                  <div className="video__details">
                    <div className="author">
                      <img src={chennelProfile} alt="" />
                    </div>
                    <div className="title">
                      <h3>{title}</h3>
                      <a href="">{mechennelNa}</a>
                      <span>{view}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
