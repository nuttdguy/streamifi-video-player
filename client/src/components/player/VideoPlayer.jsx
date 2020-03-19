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
            showMenu: true,
            showShop: false
        }
    }

    /////////////////////////////////////////////
    // LIFECYLE 
    /////////////////////////////////////////////

    // componentDidMount() {
    //     const videoPlayer = this.initVideoPlayer();
    //     videoPlayer.src = 'https://www.youtube.com/watch?v=vJNVramny9k';
    //     videoPlayer.format = 'hls'
    //     this.setState({
    //         plyr: videoPlayer,
    //     })
    // }


    /////////////////////////////////////////////
    // HELPER 
    /////////////////////////////////////////////


    initVideoPlayer() {
        return new Plyr('#player', { captions: { active: true, update: true, language: 'en' } });
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

        return (
            // <div className={styles['plyr__video-wrapper']}>

            //     <video id="player" playsInline crossOrigin="true" controls> 
            //         <source src='' ></source>
            //     </video>

            <div className={styles['plyr__video-wrapper']} id="player">
                <iframe
                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                    allowFullScreen
                    allowtransparency="true"
                    allow="autoplay"
                    className={styles['plyr__video-wrapper']}
                ></iframe>



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
        )
    }
}

export default VideoPlayer;