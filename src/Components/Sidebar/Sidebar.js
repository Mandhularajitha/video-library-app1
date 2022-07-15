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
              <Link to="/Home"><i className="material-icons">home</i><span className="sidebaricons">Home</span></Link>
              
            </div>
            <div className="sidebar__category">
            <Link to="/" className=""><i className="material-icons">explore</i><span className="sidebaricons">Explore</span></Link>
             
            </div>

          </div>
          <hr />
          <div className="sidebar__categories">
           
            <div className="sidebar__category">
              <Link to="/History"><i className="material-icons">history</i><span className="sidebaricons">History</span></Link>
         
            </div>
            <div className="sidebar__category">
              <Link to="/CreatPlaylist"><i className='fas fa-sliders-h'></i><span className="sidebaricons">PlayList</span></Link>
          
            </div>
            <div className="sidebar__category">
              <Link to="/WatchLater"><i className="material-icons">watch_later</i><span className="sidebaricons">WatchLater</span></Link>
            
            </div>
            <div className="sidebar__category">
              
             <Link to="/Liked"><i className="material-icons">thumb_up</i><span className="sidebaricons">Liked Videos</span></Link>
            
            </div>
          </div>
          <hr />
        </div>
   
      </div>
    </>
  );
};
