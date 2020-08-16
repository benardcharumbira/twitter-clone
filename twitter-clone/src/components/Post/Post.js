import React from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
const Post = ({
  displayName,
  userName,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              John Shades
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @jshades
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Lorem ipsum dolor,adipisicing elit. Nostrum, cumque!</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/3o6Mb6igsjJkrloLLO/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
