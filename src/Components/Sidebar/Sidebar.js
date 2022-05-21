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
              <Link to="/Home"><i className="material-icons">home</i><p className="sidebaricons">Home</p></Link>
              
            </div>
            <div className="sidebar__category">
            <Link to="/" className=""><i className="material-icons">explore</i><p className="sidebaricons">Explore</p></Link>
             
            </div>

          </div>
          <hr />
          <div className="sidebar__categories">
           
            <div className="sidebar__category">
              <Link to="/History"><i className="material-icons">history</i><p className="sidebaricons">History</p></Link>
         
            </div>
            <div className="sidebar__category">
              <Link to="/CreatPlaylist"><i className='fas fa-sliders-h'></i><p className="sidebaricons">PlayList</p></Link>
          
            </div>
            <div className="sidebar__category">
              <Link to="/WatchLater"><i className="material-icons">watch_later</i><p className="sidebaricons">WatchLater</p></Link>
            
            </div>
            <div className="sidebar__category">
              
             <Link to="/Liked"><i className="material-icons">thumb_up</i><p className="sidebaricons">Liked Videos</p></Link>
            
            </div>
          </div>
          <hr />
        </div>
   
      </div>
    </>
  );
};
