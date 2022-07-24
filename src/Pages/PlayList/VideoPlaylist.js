import React, { useState } from "react";
// import { useAuth } from "../../Context/Authentication/LoginContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideo } from "../../Context/getVideoContext";

export const VideoPlaylist = () => {
//   const { auth } = useAuth();
  const {video_id} = useParams
  const [singleVideoData, setSingleVideoData] = useState({});

  useEffect(() => {
    (async () => {
      const resVideo = await getVideo(video_id);
      setSingleVideoData(resVideo);
    })();
  }, [video_id]);

  return (
    <>
    <div className="video-container">
      <div className="single-video-container">
        <iframe className="video_play"
          width="90%"
          height="500px"
          src={`https://www.youtube.com/embed/${video_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        ></iframe>
      </div>
    </div>


    <div>
        {/* <h1>{singleVideoData.title}</h1> */}
    </div>
    </>
  );
};
