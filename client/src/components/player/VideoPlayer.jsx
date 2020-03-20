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
            showMenu: false,
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
        let player = videojs('player', {
            // aspectRatio: '16:9',
            fluid: true,
            autoplay: false,
            html5: {
                hls: {
                    overrideNative: true
                },
                nativeAudioTracks: false,
                nativeVideoTracks: false
            }
        });


        console.log('videojs=', player)
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
        const { showMenu, showShop } = this.state;
        // src="https://mixer.com/api/v1/channels/66167360/manifest.m3u8"

        return (

            <Fragment >

                <div className={containerStyles.positionContainers}>

                    <video id='player'
                        style={{
                            ['min-height']: '544px',
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                            top: '0',
                            left: '0',
                            ['padding-top']: '0'
                        }}
                        controls
                        className={'video-js'}>
                        <source
                            src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                            type="application/x-mpegURL"></source>
                    </video>

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

                </div>

            </Fragment>
        )
    }
}

export default VideoPlayer;