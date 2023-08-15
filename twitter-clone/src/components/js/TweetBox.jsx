import React, { useState } from 'react';
import "../css/TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from '../../fb';
import { collection, addDoc } from 'firebase/firestore';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    addDoc(collection(db, 'posts'), {
      displayName: 'Ethan Kavanagh',
      username: 'ethkav03',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://lh3.googleusercontent.com/ogw/AGvuzYYGaRMJjz_0xWuNAr5Q9hZiCRrBR73YEwzCwooN=s32-c-mo",
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form action="">
          <div className="tweetBox_input">
            <Avatar src="https://lh3.googleusercontent.com/ogw/AGvuzYYGaRMJjz_0xWuNAr5Q9hZiCRrBR73YEwzCwooN=s32-c-mo" />
            <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} type="text" placeholder="What's happening?"  />
          </div>
          <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} type="text" placeholder='Optional: Enter image URL' className='tweetBox_imageInput' />
          <Button onClick={sendTweet} className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox