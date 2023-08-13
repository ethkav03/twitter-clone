import React from 'react';
import "../css/TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form action="">
          <div className="tweetBox_input">
            <Avatar src="https://lh3.googleusercontent.com/ogw/AGvuzYYGaRMJjz_0xWuNAr5Q9hZiCRrBR73YEwzCwooN=s32-c-mo" />
            <input type="text" placeholder="What's happening?"  />
          </div>
          <input type="text" placeholder='Optional: Enter image URL' className='tweetBox_imageInput' />
          <Button className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox