import React, { Component } from 'react';
import VideoPlayer from '../components/player/VideoPlayer.jsx'
import Redeemable from '../components/redeemable/Redeemable.jsx'
import VideoFooterBar from '../components/video-footer-bar/VideoFooterBar.jsx'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div>
                <VideoPlayer />
                <Redeemable />
                <VideoFooterBar />
                {/* <div> Video Controls / Settings Component </div> */}
            </div>
        )
    }
}

export default App;