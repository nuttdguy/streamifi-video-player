import React, { Component } from 'react';
import Plyr from 'plyr';

class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plyr: null
        }
    }

    componentDidMount() {
        const videoPlayer = this.initVideoPlayer();
        this.setState({
            plyr: videoPlayer
        })     
    }

    initVideoPlayer() {
        return new Plyr('#player');
    }

    render() {

        return (
            <video id="player" playsInline controls>

                {/* <source src="/path/to/video.mp4" type="video/mp4" />
                <source src="/path/to/video.webm" type="video/webm" />
                <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> */}

            </video>
        )
    }
}

export default VideoPlayer;