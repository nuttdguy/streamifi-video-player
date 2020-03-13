import React, { Component } from 'react';
import Plyr from 'plyr';
import Hls from 'hls.js';
import axios from 'axios';



class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plyr: null,
            src: '/api/v1/channels/393920/manifest.m3u8',
            format: 'hls'
        }
    }

    componentDidMount() {
        const videoPlayer = this.initVideoPlayer();
        this.setState({
            plyr: videoPlayer
        })     
    }

    initVideoPlayer() {

        return new Plyr('#player', 
            {captions: 
                {active: true, update: true, language: 'en'}
            }
        );
    }


    render() {

        return (
            <video id="player" playsInline crossOrigin="true" controls>
                <source src={this.state.src}  type={this.state.format} />
                {/* <source src="/path/to/video.mp4" type="video/mp4" />
                <source src="/path/to/video.webm" type="video/webm" />
                <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> */}

            </video>
        )
    }
}

export default VideoPlayer;