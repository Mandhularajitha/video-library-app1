import React from "react";
import "./VideoCard.css";
import { videos } from "../../backend/db/videos";
import { Link } from "react-router-dom";

export const VideoCard = () => {
  
  return (
      <div className="videos">
        <div className="videos__container">
          {videos.map((video) => {
            const { _id, title, thumbnail, chennelProfile, mechennelNa, view, VideoId } =
              video;
            return (
              <div
                className="videos__container "
                key={_id}
              >
                <Link to={`/SingleVideo/${VideoId}`}>
                  <div className="video">
                    <div className="video__thumbnail">
                      <img src={thumbnail} alt="" />
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
  );
};
