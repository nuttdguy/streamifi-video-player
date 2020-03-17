import React, { Component } from 'react';
import Plyr from 'plyr';
import styles from './VideoPlayer.css';
import axios from 'axios';



class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plyr: null
        }
    }

    componentDidMount() {
        const videoPlayer = this.initVideoPlayer();
        videoPlayer.src = '/api/v1/channels/393920/manifest.m3u8';
        videoPlayer.format = 'hls'
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
            <div className={styles['plyr__video-wrapper']}>

                <video id="player" playsInline crossOrigin="true" controls> </video>

            </div>
        )
    }
}

export default VideoPlayer;