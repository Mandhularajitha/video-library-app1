import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";


export const Sidebar = () => {
  return (
    <>
      <div className="mainBody">
  
        <div className="sidebar">
          
          <div className="sidebar__categories">
            <div className="sidebar__category">
              <Link to="/Home"><i className="material-icons">home</i></Link>
              <span>Home</span>
            </div>
            <div className="sidebar__category">
            <Link to="/" className=""><i className="material-icons">explore</i></Link>
              <span>Explore</span>
            </div>

          </div>
          <hr />
          <div className="sidebar__categories">
           
            <div className="sidebar__category">
              <Link to="/History"><i className="material-icons">history</i></Link>
              <span>History</span>
            </div>
            <div className="sidebar__category">
              <Link to="/PlayList"><i className='fas fa-sliders-h'></i></Link>
              <span>PlayList</span>
            </div>
            <div className="sidebar__category">
              <Link to="/WatchLater"><i className="material-icons">watch_later</i></Link>
              <span>Watch Later</span>
            </div>
            <div className="sidebar__category">
              
             <Link to="/Liked"><i className="material-icons">thumb_up</i></Link>
             
              <span>Liked Videos</span>
            </div>
          </div>
          <hr />
        </div>
   
      </div>
    </>
  );
};
