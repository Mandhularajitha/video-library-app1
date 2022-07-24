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
              <Link to="/Home">
                <i className="fa fa-home" aria-hidden="true"></i>
                <span className="sidebaricons">Home</span>
              </Link>
            </div>
            <div className="sidebar__category">
              <Link to="/" className="">
                <i className="icon-sidebar fa-solid fa-compass"> </i>
                <span className="sidebaricons">Explore</span>
              </Link>
            </div>
          </div>
          <hr />
          <div className="sidebar__categories">
            <div className="sidebar__category">
              <Link to="/History">
              <i className="icon-sidebar fa-solid fa-clock-rotate-left"></i>
                <span className="sidebaricons">History</span>
              </Link>
            </div>
            <div className="sidebar__category">
              <Link to="/CreatPlaylist">
              <i className="icon-sidebar fa-solid fa-folder-plus"></i>
                <span className="sidebaricons">playlists</span>
              </Link>
            </div>
            <div className="sidebar__category">
              <Link to="/WatchLater">
              <i className="icon-sidebar fa-solid fa-clock"></i>
                <span className="sidebaricons">WatchLater</span>
              </Link>
            </div>
            <div className="sidebar__category">
              <Link to="/Liked">
              <i className="icon-sidebar fa-solid fa-thumbs-up "></i>
                <span className="sidebaricons">Liked Videos</span>
              </Link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
