import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import './Feed.css';
import {collection, onSnapshot } from "firebase/firestore"; 
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "posts"), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()))
        });
    }, []);
    

    return (
        <div className="feed">

            <div className="feed__header">
                <h2>Home</h2>
            </div>
            
            <TweetBox />

            <FlipMove>
            {posts.map(post => (
                
                <Post
                key={post.id} 
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                />

            ))}
            </FlipMove>
        </div>
    )
}

export default Feed;