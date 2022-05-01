import React from "react";
import "./VideoCard.css";
import { videos } from "../../backend/db/videos";

export const VideoCard = () => {
  return (
    <>
      {videos.map((Products) => {
        const {
          _id,
          title,
          thumbnail,
          chennelProfile,
          mechennelNa,
          view,
        } = Products;
        return (
          <>
    
              <div className="videos"> 
                <h1>Recommended</h1>

                <div className="videos__container">
                  <div className="video">
                    <div className="video__thumbnail">
                      <img
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="video__details">
                      <div className="author">
                        <img src={chennelProfile} alt="" />
                      </div>
                      <div className="title">
                        <h3>
                          {title}
                        </h3>
                        <a href="">{mechennelNa}</a>
                        <span>{view}</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

          </>
        );
      })}
    </>
  );
};
