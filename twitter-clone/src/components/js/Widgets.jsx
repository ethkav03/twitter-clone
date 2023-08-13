import React from 'react';
import "../css/Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTweetEmbed, TwitterShareButton, TwitterTimelineEmbed } from "react-twitter-embed";

export default function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets_input">
          <SearchIcon className='widgets_searchIcon' />
          <input type="text" placeholder='Search Twitter' />
        </div>

        <div className="widgets_widgetContainer">
          <h2>What's happening</h2>
          <br />
          <TwitterTweetEmbed tweetId={"1668619286796201985"} />
          <TwitterTimelineEmbed sourceType='profile' screenName='ethkav03'  options={{ height: 400 }} />
          <br />
          <TwitterShareButton url={"https://twitter.com/ethkav03"} options={{ text: "#reactjs is awesome"}} />
        </div>
    </div>
  )
}