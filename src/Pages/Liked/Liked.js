import React from 'react'
import { useLiked } from '../../Context/LikeContext';
import "./Liked.css";

export const Liked = () => {

  const {likedState} = useLiked();
  const {likedDispatch,deleteLikedVideo } = useLiked();

  console.log(likedState,"rhjh")
  return (

    <>
        <div className="videos">
        <div className="videos__container">
          
          {likedState.likedVideo?.map((video) => {
            
            const { _id, title, thumbnail, chennelProfile, mechennelNa, view } =
              video;
            return (
              <>
                <div className="videos__container" key={_id}>
                  <div className="video">
                    <div className="video__thumbnail">
                      <img src={thumbnail} alt="" />
                     
                    </div>

                    <div className="icons_1">
                        <div className="border_radios_delete">
                          <div className="border_radios_2" onClick={()=>deleteLikedVideo(_id,likedDispatch)}>
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



 


