import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import db from './firebase';
import "./Tweetbox.css"

function Tweetbox() {
  const [tweetmessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName:"Sreevatsan",
      userName:"XYNC",
      verfied:true,
      message:tweetmessage,
      image:tweetImage,
      avatar:"https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"

    })
    setTweetImage("");
    setTweetMessage("");
  }
  return (
    <div className='tweetbox'>
        <form>
            <div className='feedbox__input'>
                <Avatar src='https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg'/>
                <input placeholder='Whats happening?'value={tweetmessage} 
                onChange={(e)=>setTweetMessage(e.target.value)}
                type="text"></input>
                


            </div>
            <input value={tweetImage} onChange={(e)=>setTweetImage(e.target.value)} className="feebox__imageinput" placeholder='Optional: Enter image URL'></input>
            <Button onClick={sendTweet} className='feedbox__tweetbutton'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox