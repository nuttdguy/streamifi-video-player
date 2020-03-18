import React, { Component } from 'react';
import styles from './Stats.css';

class Stats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sparks: 0,
            embers: 0,
            level: 0,
            tokens: {}
        }
    }

    /////////////////////////////////////////////
    // LIFECYLE 
    /////////////////////////////////////////////

    componentDidMount() {
        this.setState({
            sparks: 100000,
            embers: 5000,
            level: 34,
            tokens: {
                sparks: '../dist/img/spark-coin.svg',
                embers: '../dist/img/ember.png'
            }
        })
    }


    /////////////////////////////////////////////
    // HANDLERS
    /////////////////////////////////////////////


    
    /////////////////////////////////////////////
    // TEMPLATES
    /////////////////////////////////////////////




    render() {
        const { sparks, embers, level, tokens } = this.state;
        const { onShowShop } = this.props;

        return (
            <div className={styles.stats}>
                <div className={styles.lvl}>
                    <div className={styles.lvlContainer} >
                        <span>LVL {level}</span>
                    </div>
                </div>

                <div>

                    <div className={styles.sparkContainer}>
                        <img src={tokens.sparks} />
                        <span>{sparks}</span>
                    </div>

                    <div className={styles.emberContainer}>
                        <img src={tokens.embers} />
                        <span>{embers}</span>
                        <button onClick={onShowShop}>+</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Stats;