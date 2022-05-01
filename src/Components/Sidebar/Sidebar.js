import React from "react";
import "./Sidebar.css";
import { VideoCard } from "../VideoCards/VideoCard";


export const Sidebar = () => {
  return (
    <>


    
      <div className="mainBody">
  
        <div className="sidebar">
          
          <div className="sidebar__categories">
            <div className="sidebar__category">
              <i className="material-icons">home</i>
              <span>Home</span>
            </div>
            <div className="sidebar__category">
            <i className="material-icons">explore</i>
              <span>Explore</span>
            </div>

          </div>
          <hr />
          <div className="sidebar__categories">
           
            <div className="sidebar__category">
              <i className="material-icons">history</i>
              <span>History</span>
            </div>
            <div className="sidebar__category">
              <i className='fas fa-sliders-h'></i>
              <span>PlayList</span>
            </div>
            <div className="sidebar__category">
              <i className="material-icons">watch_later</i>
              <span>Watch Later</span>
            </div>
            <div className="sidebar__category">
              <i className="material-icons">thumb_up</i>
              <span>Liked Videos</span>
            </div>
          </div>
          <hr />
        </div>

        <VideoCard/>       
      </div>
    </>
  );
};
