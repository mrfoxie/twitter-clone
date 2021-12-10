import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import Posts from "./Posts.js";

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
      <Posts />
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
