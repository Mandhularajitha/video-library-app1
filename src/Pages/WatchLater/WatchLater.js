import React from 'react'
import { useWatchlater } from '../../Context/WatchLaterContext';

export const WatchLater = () => {
    const {watchedLaterState} = useWatchlater();
    const {watchLaterDispatch,deleteWatchLater } = useWatchlater();
    
  return (
    <>
    
    <div className="videos">
    <div className="videos__container">

      {watchedLaterState.WatchLaterVideo?.map((video) => {
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
                          <div className="border_radios_2" onClick={()=>deleteWatchLater (_id,watchLaterDispatch)}>
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

