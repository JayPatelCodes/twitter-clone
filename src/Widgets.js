import React from "react";
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>    

            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>

                <TwitterTweetEmbed tweetId="1696863593189281816" />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Minecraft"
                    options={{height: 400 }}
                />

                <TwitterShareButton
                    url={'https://www.minecraft.net/en-us'}
                    options={{ text: 'I love Minecraft!', via: 'Minecraft' }}
                />
            </div>
        </div>
    )
}

export default Widgets;