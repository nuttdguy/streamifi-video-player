import React, { Component } from 'react';
import Plyr from 'plyr';

import Redeemable from '../redeemable/Redeemable.jsx'
import VideoFooterBar from '../video-footer-bar/VideoFooterBar.jsx'
import Ember from '../redeemable/ember/Ember.jsx'

import containerStyles from '../App.css'; 
import styles from './VideoPlayer.css';



class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plyr: null,
            showRedeemableMenu: true,
            showRedeemableShop: false
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

    showRedeemableMenu() {
        const show = !this.state.showRedeemableMenu;
        this.setState({showRedeemableMenu: show});
    }


    initVideoPlayer() {
        return new Plyr('#player', 
            {captions: 
                {active: true, update: true, language: 'en'}
            }
        );
    }


    render() {
        const { showRedeemableMenu, showRedeemableShop } = this.state;

        return (
            <div className={styles['plyr__video-wrapper']}>

                <video id="player" playsInline crossOrigin="true" controls> </video>

                <div className={containerStyles.redeemableContainer}>
                    { showRedeemableMenu ? <Redeemable /> : null }
                </div>
                <div className={containerStyles.videoFooterContainer}>
                    <VideoFooterBar onShowRedeemableMenu={this.showRedeemableMenu.bind(this)}/>
                </div>
                
                <div className={containerStyles.emberContainer}>
                    { showRedeemableShop ? <Ember /> : null }
                </div>

            </div>
        )
    }
}

export default VideoPlayer;