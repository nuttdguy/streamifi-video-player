import React, { Component } from 'react';
import LevelStatus from './LevelStatus.jsx';
import BalanceStatus from './BalanceStatus.jsx';

import css from './Stats.css';

class Stats extends Component {

    constructor(props) {
        super(props);
        this.state = {}
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
            <div className={css.statsContainer}>

                <LevelStatus 
                    level={walletStats.level}/>

                <BalanceStatus 
                    embersBalance={walletStats.embers}
                    sparksBalance={walletStats.sparks}
                    embersImgSrc={walletStats.tokens.embers}
                    sparksImgSrc={walletStats.tokens.sparks}
                    onShowShop={onShowShop}
                />

            </div>

        )
    }
}

export default Stats;



