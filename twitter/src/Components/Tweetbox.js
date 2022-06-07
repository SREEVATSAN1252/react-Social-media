import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./Tweetbox.css"
function Tweetbox() {
  return (
    <div className='tweetbox'>
        <form>
            <div className='feedbox__input'>
                <Avatar src='https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg'/>
                <input placeholder='Whats happening?' type="text"></input>
                


            </div>
            <input className="feebox__imageinput" placeholder='Optional: Enter image URL'></input>
            <Button className='feedbox__tweetbutton'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox