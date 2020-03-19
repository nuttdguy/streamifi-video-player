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
            <div className={styles.statsContainer}>

                <div className={styles.levelContainer}>

                    <div className={styles.level} >
                        <span>LVL {walletStats.level}</span>
                    </div>
                </div>

                <div className={styles.balanceContainer}> 

                    <div className={styles.sparkContainer}>
                        <img src={walletStats.tokens.sparks} />
                        <span>{walletStats.sparks}</span>
                    </div>

                    <div className={styles.emberContainer}>
                        <img src={walletStats.tokens.embers} />
                        <span>{walletStats.embers}</span>
                        <button onClick={onShowShop}>
                            <span>+</span>
                        </button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Stats;