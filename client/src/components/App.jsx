import React, { Component } from 'react';
import VideoPlayer from '../components/player/VideoPlayer.jsx'
import Redeemable from '../components/redeemable/Redeemable.jsx'
import VideoFooterBar from '../components/video-footer-bar/VideoFooterBar.jsx'
// import Fake from '../components/fake-layout/Fake.jsx'

import style from './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showRedeemableMenu: false
        }
    }

    showRedeemableMenu() {
        const show = !this.state.showRedeemableMenu;
        this.setState({showRedeemableMenu: show});
    }

    render() {
        const { showRedeemableMenu } = this.state;

        return (
            <div className={style['container']}>
                <div className={style.videoPlayerContainer}>
                    <VideoPlayer />
                </div>
                <div className={style.redeemableContainer}>
                    { showRedeemableMenu ? <Redeemable /> : null }
                </div>
                <div className={style.videoFooterContainer}>
                    <VideoFooterBar onShowRedeemableMenu={this.showRedeemableMenu.bind(this)}/>
                </div>
                
                {/* <div> Video Controls / Settings Component </div> */}
            </div>
        )
    }
}

export default App;