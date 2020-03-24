import React, { Component } from 'react';
import VideoPlayer from './player/video/VideoPlayer.jsx'
import css from './App.css';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <div className={css.container}>
                <VideoPlayer />
            </div>
        )
    }
}

export default App;