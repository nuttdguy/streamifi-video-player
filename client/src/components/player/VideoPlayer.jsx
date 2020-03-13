import React, { Component } from 'react';
import Plyr from 'plyr';
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
            </video>
        )
    }
}

export default VideoPlayer;