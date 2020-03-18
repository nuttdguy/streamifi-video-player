import React, { Component } from 'react';
import styles from './Stats.css';

class Stats extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        const { onShowShop } = this.props;

        return (
            <div className={styles.stats}>
                <div className={styles.lvl}>
                <div className={styles.lvlContainer} >
                    <span>LVL 34</span>
                </div>
                </div>

                <div>
                
                <div className={styles.sparkContainer}>
                    <img src='../dist/img/spark-coin.svg' />
                    <span>69,000</span>
                </div>

                <div className={styles.emberContainer}>
                    <img src='../dist/img/ember.png' />
                    <span>0</span>
                    <button onClick={onShowShop}>+</button>
                </div>
                </div>

            </div>

        )
    }
}

export default Stats;