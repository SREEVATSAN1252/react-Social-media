import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed"
import "./Widgets.css"
function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='searchIcon'/>
        <input placeholder='Search Twitter' type="text"/>
      </div>
      <div className='widget__container'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"}/>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>

    </div>
  )
}

export default Widgets