import React, { Component } from 'react';
import styles from './Stats.css';

class Stats extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    /////////////////////////////////////////////
    // LIFECYLE 
    /////////////////////////////////////////////

    componentDidMount() { }


    /////////////////////////////////////////////
    // HANDLERS
    /////////////////////////////////////////////



    
    /////////////////////////////////////////////
    // TEMPLATES
    /////////////////////////////////////////////




    render() {
        const { onShowShop, walletStats } = this.props;

        return (
            <div className={styles.stats}>
                <div className={styles.lvl}>
                    <div className={styles.lvlContainer} >
                        <span>LVL {walletStats.level}</span>
                    </div>
                </div>

                <div>

                    <div className={styles.sparkContainer}>
                        <img src={walletStats.tokens.sparks} />
                        <span>{walletStats.sparks}</span>
                    </div>

                    <div className={styles.emberContainer}>
                        <img src={walletStats.tokens.embers} />
                        <span>{walletStats.embers}</span>
                        <button onClick={onShowShop}>+</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Stats;