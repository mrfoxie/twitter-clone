import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core";

function Post(displayName, username, verified, text, image, avatar) {
  return (
    <div className="post">
      <Avatar src="https://www.hackeridiot.com/uploads/logo/logo_61278d3bb0b2a.png"></Avatar>
    </div>
  );
}

export default Post;
