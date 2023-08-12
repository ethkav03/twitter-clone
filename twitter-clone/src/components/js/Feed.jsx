import React from 'react';
import "../css/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className='feed'>
        <div className="feed_header">
          <h2>Home</h2>
        </div>

        <TweetBox />

        <Post />
    </div>
  )
}

export default Feed