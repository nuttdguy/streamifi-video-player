import React from 'react';

const cssInline = {
    minHeight: '544px',
    position: 'relative',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    paddingTop: '0'
}

const Player = (props) => (
    <video id='player'
        className={'video-js'}
        style={cssInline}>

        <source
            src={props.videoSRC}
            type={props.videoType} ></source>
    </video>
)

export default Player;