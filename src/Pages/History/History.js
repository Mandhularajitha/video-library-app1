import React from 'react'
import { useHistry } from '../../Context/HistryContext';

export const History = () => {

    const {historyState} = useHistry();
    const {historyDispatch,deleteHistory} = useHistry();

  return (
    <>
        <div className="videos">
        <div className="videos__container">
          
          {historyState.historyVideo?.map((video) => {
            
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
                          <div className="border_radios_2" onClick={()=>deleteHistory(_id,historyDispatch)}>
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
