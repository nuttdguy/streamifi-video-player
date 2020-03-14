import React, { Component } from 'react';
import axios from 'axios';


class Redeemable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redeemables: []
        }
    }

    componentDidMount() {
        // 
        const redeemables = this.getRedeemableItems();

        this.setState({
            redeemables: redeemables
        })
    }

    getRedeemableItems() {
        axios
            .get('http://127.0.0.1:3005/redeemables')
            .then(data => {
                console.log(data);
                return data;
            }).catch(err => {
                console.log('err=', err);
            })
    }

    render() {
        
        return (
            <div>
                <ul>
                    <li>Embers</li>
                    <li>Sparks</li>
                </ul>

                <ul>
                    <li>Skills appear here on trance_musics channel</li>
                </ul>
        
                <ul>
                    <li>redeemable-1</li>
                    <li>redeemable-2</li>
                    <li>redeemable-3</li>
                </ul>
                <ul>
                    <li>redeemable-4</li>
                    <li>redeemable-5</li>
                    <li>redeemable-6</li>
                </ul>
                <ul>
                    <li>redeemable-7</li>
                    <li>redeemable-8</li>
                    <li>redeemable-9</li>
                </ul>
                <ul>
                    <li>lvl 34</li>
                    <li>sparks 69,000</li>
                    <li>gems 0 <a>+</a></li>
                </ul>
            </div>
        )
    }
}

export default Redeemable;