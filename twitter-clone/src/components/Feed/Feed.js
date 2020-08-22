import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../Feed/TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../DB/Firebase";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          verified={post.verified}
        />
      ))}
    </div>
  );
};

export default Feed;
