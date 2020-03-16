import React, { Component } from 'react';
import './VideoFooterBar.css';


class VideoFooterBar extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (
            <div className='video-footer-bar'>
                <div>
                    <div className='avatar-container'>
                        <img src="../dist/img/avatar64a.png" />
                    </div>
                    <div className='video-heading-container'>
                        <h4>xbox is down lets hang in there / Streamloots Partner / #RGS</h4>
                        <p>The Jackbox Party Pack 3 
                            <span> 18+ Stream</span>
                            
                        </p>
                    </div>
                    <div className='live-viewer-container'>
                        <span>54</span>
                    </div>
                    <div className='skills-container'>
                        <div>
                            <button><img src="../dist/img/skils-icon.svg" />Skills </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoFooterBar;
