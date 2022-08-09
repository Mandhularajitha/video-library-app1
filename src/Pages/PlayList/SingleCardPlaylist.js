import React from "react";
import { useLiked } from "../../Context/LikeContext";
import { useWatchlater } from "../../Context/WatchLaterContext";
import { useAuth } from "../../Context/Authentication/LoginContext";
import { useParams } from "react-router-dom";
import { usePlayList } from "../../Context/PlayListContext";

export const PlaylistVideoCard = () => {
  const { likedDispatch, addToLike } = useLiked();
  const { watchLaterDispatch, addToWatchlater } = useWatchlater();

  const { isAuth } = useAuth();
  const { playlistId } = useParams();
  const { playListState, deleteVideo, playListDispatch } = usePlayList();
  

  const newArr = playListState?.getUserPlayList?.find(e => e._id === playlistId);
  console.log(playListState, "//");

  return (
    <>
      <div className="videos">
        <div className="videos__container">
          {newArr?.videos.map((video) => {
            const { _id, title, thumbnail, chennelProfile, mechennelNa, view } =
              video;
            return (
              <div
                className="videos__container "
                key={_id}
              >
                <div className="video">
                  <div className="video__thumbnail">
                    <img src={thumbnail} alt="" />
                  </div>

                  <div className="icons_1">
                    <div className="card-buttons">
                      <div
                        className="border_radios_2"
                        onClick={() => addToLike(video, likedDispatch, isAuth)}
                      >
                        <i className="icon-sidebar fa-solid fa-thumbs-up "></i>
                      </div>

                      <div
                        className="border_radios_2"
                        onClick={() =>
                          addToWatchlater(video, watchLaterDispatch, isAuth)
                        }
                      >
                        <i className="icon-sidebar fa-solid fa-clock"></i>
                      </div>

                      <div className="delete-btn">
                        <div className="border_radios_2" onClick={() => deleteVideo(newArr._id,_id,playListDispatch)}>
                          <i className="material-icons">delete</i>
                        </div>
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