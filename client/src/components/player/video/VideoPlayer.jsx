import React, { Component, Fragment } from 'react';
import videojs from 'video.js';
import Player from '../Player.jsx'

import RedeemableList from '../redeemableList/RedeemableList.jsx'
import VideoFooterBar from '../videoFooterBar/VideoFooterBar.jsx'
import ApiService from '../../../../service/apiService.js'

import cssContainer from '../../App.css';



class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: 'none',
            videojs: null,
            stream: { title: '', viewerCount: '', audience: '', subheading: '', name: '' },
            videoSRC: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
            videoType: 'application/x-mpegURL'
        }
    }

    /////////////////////////////////////////////
    // LIFECYLE 
    /////////////////////////////////////////////

    componentDidMount() {
        this.loadInitialState();
    }


    /////////////////////////////////////////////
    // HELPER 
    /////////////////////////////////////////////

    loadInitialState() {

        const videojs = this.initializePlayer(); // initialize the player

        ApiService.getStreams((error, streams) => {
            if (error) {
                return console.log('Error=', error);
            }

            this.setState({
                videojs: videojs,
                stream: streams[(Math.floor(Math.random() * streams.length))]
            })
        });
    }

    initializePlayer() {
        let player = videojs('player', {
            fluid: true,
            autoplay: false,
            preload: 'auto',
            bigPlayButton: false,
            html5: {
                hls: {
                    overrideNative: true
                },
                nativeAudioTracks: false,
                nativeVideoTracks: false
            },
            handleManifestRedirects: true,
            controls: true,
        });

        return player;
    }


    /////////////////////////////////////////////
    // HANDLERS
    /////////////////////////////////////////////


    onShowMenu() {
        const showMenu = this.state.showMenu === 'none' ? 'flex' : 'none';
        this.setState({showMenu: showMenu});
    }


    /////////////////////////////////////////////
    // TEMPLATES
    /////////////////////////////////////////////


    render() {
        const { showMenu, stream, videoSRC, videoType } = this.state;


        return (

            <Fragment >

                {/* utilize this container to set as base reference for positioning */}
                <div className={cssContainer.positionContainers}>


                    {/* Video player */}
                    <Player videoSRC={videoSRC} videoType={videoType} />


                    {/* Redeemable menu */}
                    <div style={{display: showMenu}} 
                        className={cssContainer.redeemableContainer}>
                        {<RedeemableList username={stream.name} />}
                    </div>



                    {/* Video footer  */}
                    <div className={cssContainer.videoFooterContainer}>
                        <VideoFooterBar
                            avatarImgSrc={'https://streamifi.s3-us-west-1.amazonaws.com/img/avatar64.jpg'}
                            skillsImgSrc={'https://streamifi.s3-us-west-1.amazonaws.com/img/skils-icon.svg'}
                            eyeImgSrc={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABcklEQVRIie2UwUpCURCG54Y7JSva5UVI6NKqNxBp1yO0rh6iRb2Lq1AEN6EgBJJtXCTUwo1JL2CCSrX82vzR6XhTg8iNAwcu8/0z55yZe8ZsZcu2YBYEtszs2MyOzOzAzLaFBmb2YGZ1M7sKgmD4q12BBHAOTJhvE2kTiybPAG0nQQM4ASIgqRXJ13B0bSAzL3kW6CvgCcgvcKA80FNMH8j+JEwBXQlvgQ2HhUAFGGtVgcjhaaCp2C6QitugKEHHFSj5S0zth0DoHbAjVvSTFwTegJzHKmLXwI56VJOv7GlzygFQcEFLzsuYm43FMo4vlG8Uo78Qa5mZrfl8qnazLU7v5/xWoldg12NVsZrKEwJ1+Uqedg94nyqR4GeT74Gk44/UUN8GXtnWgcfYJkvg/qZNIO2wECgDI62Sl3wTuFNs/G8qYZavh9ZjsYd2CDwr5ueH5gTEjYpTYF+3TOn7DLhxdPNHhbPJnw275Yzrlf2rfQDAlLqI49Y60wAAAABJRU5ErkJggg=="}
                            btnText={'skills'}
                            stream={stream}
                            onShowMenu={this.onShowMenu.bind(this)} />

                    </div>


                </div>

            </Fragment>
        )
    }
}

export default VideoPlayer;