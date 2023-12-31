import React, { useEffect, useState } from 'react';
import "../css/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from '../../fb';
import { collection, getDocs } from 'firebase/firestore';
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = await getDocs(collection(db, 'posts'));
      const fetchedPosts = [];
      q.forEach((doc) => {
        fetchedPosts.push(doc.data()); // Assuming your document data is stored in doc.data()
      });
      setPosts(fetchedPosts);
    };

    fetchData();
  }, []);

  return (
    <div className='feed'>
        <div className="feed_header">
          <h2>Home</h2>
        </div>

        <TweetBox />

        <FlipMove>
          {posts.map(post => (
            <Post
            key={post.text}
            displayName={post.displayName} 
            username={post.username} 
            verified={post.verified} 
            text={post.text} 
            avatar={post.avatar} 
            image={post.image}
          />
          ))}
        </FlipMove>

        
    </div>
  )
}

export default Feed