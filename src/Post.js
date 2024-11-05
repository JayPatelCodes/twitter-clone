import React, { forwardRef } from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

const Post = forwardRef(({
    displayName, 
    username,
    verified,
    text, 
    image,
    avatar
}, ref) => {
    return <div className="post" ref={ref}> 
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {displayName}{" "} 
                        <span className="post__headerSpecial"> 
                            {verified && <VerifiedRoundedIcon className="post__badge" />} @{username}
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
                <img 
                    src={image}
                    alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                    <RepeatOutlinedIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small"/>
                    <IosShareIcon fontSize="small" />
                </div>
            </div>
        </div>
    </div>
});

export default Post;