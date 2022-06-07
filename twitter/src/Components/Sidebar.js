import { Twitter } from "@mui/icons-material";

import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import { EmailOutlined } from "@mui/icons-material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";
function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twittericon" />
      <SidebarOptions active={"active"} Icon={HomeIcon} text={"Home"} />
      <SidebarOptions text={"Explore"} Icon={SearchIcon} />
      <SidebarOptions text={"Notifications"} Icon={NotificationsIcon} />
      <SidebarOptions text={"Messages"} Icon={EmailOutlined} />
      <SidebarOptions Icon={BookmarkBorderIcon} text={"Bookmarks"} />
      <SidebarOptions text={"Lists"} Icon={ListAltIcon} />
      <SidebarOptions text={"Profile"} Icon={PermIdentityIcon} />
      <SidebarOptions text={"More"} Icon={MoreHorizIcon} />
      <Button variant="outlined" fullWidth className="sidebar__tweet">Tweet</Button>
    </div>
  );
}

export default Sidebar;
