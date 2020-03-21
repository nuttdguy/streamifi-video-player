import React, { Component } from 'react';
import VideoPlayer from '../components/player/VideoPlayer.jsx'
import css from './App.css';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = { }
    }

    render() {

        return (
            <div className={css.container}>
                <div className={css.videoPlayerContainer}>
                    <VideoPlayer />
                </div>
            </div>
        )
    }
}

export default App;