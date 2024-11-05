import React from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { Button } from "@mui/material";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>
            
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists"/>
            <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile"/>
            <SidebarOption Icon={PendingOutlinedIcon} text="More"/>

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>

    )
}

export default Sidebar;