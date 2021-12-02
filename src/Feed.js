import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* post */}
      <Post />
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
    </div>
  );
}
export default Feed;
