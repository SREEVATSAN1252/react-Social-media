import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import FlipMove from "react-flip-move";

function Feed() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot=>setPosts(snapshot.docs.map(doc=>doc.data())))
   
  }, [])
  console.log("===>",posts);
  return <div className="feed">
    <div className="feed__header"><h2>Home</h2></div>
    <Tweetbox/>
    {posts.map(posts=>(
      <FlipMove>
        <Post
        key={posts.message}
        displayName={posts.displayName}
        userName={posts.userName}
        verified={posts.verified}
        message={posts.message}
        avatar={posts.avatar}
        image={posts.image}
    
    
        />
      </FlipMove>
        

    ))}
  
  </div>;
}

export default Feed;
