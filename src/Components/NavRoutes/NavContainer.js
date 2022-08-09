import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navigation/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import "./NavContainer.css"

export const NavContainer = () => {
  return (
    <div className="Navbar">
      <Navbar />
      <div className="Sidebar">
        {/* <Sidebar /> */}
        <div className="Outlets">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
