import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Test is a testing</h1>
      {/* Twitter Icon */}
      <TwitterIcon />
      {/* Sidebar icons */}
      <SidebarOption Icon={HomeIcon} text="Home" />
      {/* Sidebar icons */}
      {/* Sidebar icons */}
      {/* Sidebar icons */}
      {/* Sidebar icons */}
      {/* Sidebar icons */}
      {/* Tweet */}
    </div>
  );
}

export default Sidebar;
