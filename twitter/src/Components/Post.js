import { Repeat } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Publish } from "@mui/icons-material";
import { Verified } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { forwardRef } from "react";
import "./Post.css";
const Post = forwardRef(({ displayName, userName, verified, image, message, avatar },ref)=> {
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName} {" "}
              <span className="postheader__special">
                {verified && <Verified className="post__badge" />} @{userName}
              </span>
            </h3>
          </div>
          <div className="text__headerDiscription">
            <p>{message}</p>
          </div>
        </div>
        {image && <img src={image} />}
        
        <div className="post__footer">
          <ChatBubbleOutline className="post__footerIcon" />
          <Repeat className="post__footerIcon" />
          <FavoriteBorder className="post__footerIcon" />
          <Publish className="post__footerIcon" />
        </div>
      </div>
    </div>
  );
})

export default Post;
