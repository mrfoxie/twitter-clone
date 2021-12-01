import React from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
<Avatar src="https://www.hackeridiot.com/uploads/logo/logo_61278d3bb0b2a.png"></Avatar>
<input placeholder="What's happening?" type="text" />
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
