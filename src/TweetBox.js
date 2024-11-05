import React, { useState } from "react";
import './Widgets.css';
import { Avatar, Button } from "@mui/material";
import './TweetBox.css';
import db from './firebase';
import {collection, addDoc } from "firebase/firestore";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
    
        addDoc(collection(db, "posts"), {
            displayName: "Testing User",
            username: "testuser123",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: ""
          });
    
          setTweetMessage("");
          setTweetImage("");
    }
    

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src=""></Avatar>
                    <input
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder="What's happening?"
                        type="text" 
                    />
                </div>
                <input 
                    onChange = {(e) => setTweetImage(e.target.value)}
                    value = {tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>    
        </div>
    )
}

export default TweetBox;