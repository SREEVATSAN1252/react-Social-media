import { Repeat } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Publish } from "@mui/icons-material";
import { Verified } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
function Post({ displayName, userName, verified, image, message, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
              
            <h3>
              Sreevatsan{" "}
              
              
              <span className="postheader__special">
                <Verified className="post__badge" />
                {" "}@XYNC
              </span>
            </h3>
          </div>
          <div className="text__headerDiscription">
              <p>
                  I challenge you to build SocialMedia using REACT
              </p>

          </div>
        </div>
        <img src="https://c.tenor.com/I0yuxzfZjd8AAAAC/you-what.gif"/>
        <div className="post__footer">
            <ChatBubbleOutline className="post__footerIcon"/>
            <Repeat className="post__footerIcon"/>
            <FavoriteBorder className="post__footerIcon"/>
            <Publish className="post__footerIcon"/>
        </div>
      </div>
    </div>
  );
}

export default Post;
