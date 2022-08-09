import "./single-video.css";
import React from "react";
import { useAuth } from "../../Context/Authentication/LoginContext";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import { useHistry } from "../../Context/HistryContext";
import { Modal } from "../../Components/Modal/Modal";
import { useLiked } from "../../Context/LikeContext";
import { useWatchlater } from "../../Context/WatchLaterContext";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const [singleVideoData, setSingleVideoData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const { isAuth } = useAuth();

  const { likedDispatch, addToLike } = useLiked();
  const { watchLaterDispatch, addToWatchlater } = useWatchlater();

  const { historyDispatch, addToHistory } = useHistry();

  useEffect(() => {
    const gotVideo = videos?.find(e => e.VideoId === videoId);
    setSingleVideoData(gotVideo)
  }, [videoId]);

  return (
    <>
    {modalVisible && (
        <div className="modal-wrapper b">
          <div
            className="modal-backdrop"
            onClick={() => setModalVisible((state) => !state)}
          ></div>
          <div className="main-modal">
            <Modal data={{ singleVideoData, setModalVisible }} />
          </div>
        </div>
      )}
      <div className="video-page-body">
        <div className="single-video-body">
          <div className="video-frame">
            <div className="video-player">
              <ReactPlayer
                controls
                url={`https://www.youtube.com/watch?v=${singleVideoData?.VideoId}`}
                width="100%"
                height="100%"
                onPlay={() => addToHistory(singleVideoData, historyDispatch)}
              />

              <div className="feature-container">
                <div
                  onClick={() =>
                    addToWatchlater(singleVideoData, watchLaterDispatch, isAuth)
                  }
                  className="watch-later">
                  <div className="watch-later-btn"><i class="fa fa-clock-o"></i></div>
                  <div className="feature-texts">Watch Later</div>
                </div>

                <div
                  onClick={() => setModalVisible(!modalVisible)}
                  className="playlist">
                  <div className="playlist-btn"><i class="fa fa-plus"></i></div>
                  <div className="feature-texts">PlayList</div>
                </div>

                <div
                  onClick={() => addToLike(singleVideoData, likedDispatch, isAuth)}
                  className="like">
                  <div className="like-btn"><i class="fa fa-thumbs-up"></i></div>
                  <div className="feature-texts">Like</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
