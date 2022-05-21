import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { usePlayList } from '../../Context/PlayListContext';
const authtoken = localStorage.getItem("AuthToken");

export const Singleplaylist = () => {

    const {playListState} = usePlayList();
    const {playListDispatch,deletePlayList,PlayListVideo,addVideoToPlaylist} = usePlayList();
    console.log(playListState,"playListState")
    
    
    useEffect(() => {
      (async () => {
        try {
          const response = await axios.get("/api/user/playlists/:playlistId", {
            headers: {
              authorization:authtoken,
            },
          });
  
          console.log("response", response.data.playlists);
          playListDispatch({
            type: "ADD_VIDEO_TO_PlayList",
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
    <div className="videos__container">

    {
        console.log(playListState,"playListState")
        
    }

      {playListState.PlayListVideo?.map((video) => {

        console.log(PlayListVideo,"PlayListVideo")

    
        const { _id, title, thumbnail, chennelProfile, mechennelNa, view } =
          video;
        
        return (
          <>
            <div className="videos__container" key={_id} onClick={()=>addVideoToPlaylist(video,playListDispatch)}>
              <div className="video">
                <div className="video__thumbnail">
                  <img src={thumbnail} alt="" />
                 
                </div>

                <div className="icons_1">
                        <div className="border_radios_delete">
                          <div className="border_radios_2" onClick={()=>deletePlayList(_id,playListDispatch)}>
                            <i className="material-icons">delete</i>
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
          </>
        );
      })}
    </div>
  </div>
</>
  )
}
