import React, { Component } from 'react';
import VideoPlayer from '../components/player/VideoPlayer.jsx'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div>
                <VideoPlayer />
                <div> Redeemables Component </div>
                <div> Video Controls / Settings Component </div>
                <div> Video Player Footer Component </div>
            </div>
        )
    }
}

export default App;