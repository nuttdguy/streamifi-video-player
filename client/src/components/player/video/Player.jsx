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

const Player = ({ playerId }) => (
    <div data-vjs-player>

        <video
            className={'video-js'}
            style={cssInline}
            id={playerId}>  </video>
            
    </div>
)

export default Player;