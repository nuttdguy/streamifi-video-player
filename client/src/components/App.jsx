import React, { Component } from 'react';
import VideoPlayer from '../components/player/VideoPlayer.jsx'
import style from './App.css';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = { }
    }

    render() {

        return (
            <div className={style.container}>
                <div className={style.videoPlayerContainer}>
                    <VideoPlayer />
                </div>
            </div>
        )
    }
}

export default App;