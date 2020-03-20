import React, { Component, Fragment } from 'react';
import videojs from 'video.js';

import Redeemable from '../redeemable/Redeemable.jsx'
import VideoFooterBar from '../video-footer-bar/VideoFooterBar.jsx'
import Ember from '../redeemable/ember/Ember.jsx'

import containerStyles from '../App.css';
import styles from './VideoPlayer.css';



class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videojs: null,
            showMenu: true,
            showShop: false
        }
    }

    /////////////////////////////////////////////
    // LIFECYLE 
    /////////////////////////////////////////////

    componentDidMount() { 

        const videojs = this.initVideoPlayer();
        this.setState({
            videojs: videojs
        })
     }


    /////////////////////////////////////////////
    // HELPER 
    /////////////////////////////////////////////


    initVideoPlayer() {
        let player =  videojs('player', {
            src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
            type: "application/x-mpegURL",
            height: '100%',
            width: '100%',
            controls: 'true'
        });

        return player;
    }


    /////////////////////////////////////////////
    // HANDLERS
    /////////////////////////////////////////////

    onShowMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    onShowShop() {
        this.setState({ showShop: !this.state.showShop })
    }



    /////////////////////////////////////////////
    // TEMPLATES
    /////////////////////////////////////////////



    render() {
        const { showMenu, showShop, videojs } = this.state;

        return (

            <Fragment >

                <video id='player' className={'video-js'}> </video>

                {/* <iframe
                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                    allowFullScreen
                    allowtransparency="true"
                    allow="autoplay"
                    className={styles['plyr__video-wrapper']}
                ></iframe> */}



                {/* Redeemable menu */}
                <div className={containerStyles.redeemableContainer}>
                    {showMenu ? <Redeemable
                        onShowShop={this.onShowShop.bind(this)} />

                        : null}
                </div>



                {/* Video footer  */}
                <div className={containerStyles.videoFooterContainer}>
                    <VideoFooterBar
                        onShowMenu={this.onShowMenu.bind(this)} />
                </div>



                {/* Ember - redeemable item shop */}
                <div className={containerStyles.emberContainer}>
                    {showShop ? <Ember
                        onShowShop={this.onShowShop.bind(this)} />

                        : null}
                </div>

            </Fragment>
        )
    }
}

export default VideoPlayer;