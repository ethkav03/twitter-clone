import React from 'react';
import "../css/Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar_twitterIcon' />

        <SidebarOption active Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} title="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} title="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} title="Lists" />
        <SidebarOption Icon={PermIdentityIcon} title="Profile" />
        <SidebarOption Icon={MoreHorizIcon} title="More" />

        <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar