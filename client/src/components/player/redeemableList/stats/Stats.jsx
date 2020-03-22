import React from 'react';
import LevelStatus from './LevelStatus.jsx';
import BalanceStatus from './BalanceStatus.jsx';

import css from './Stats.css';

const Stats = ({ onShowEmberShop, walletStatus }) => (

    <div className={css.statsContainer}>

        <LevelStatus
            level={walletStatus.level} />

        <BalanceStatus
            key={walletStatus.wallet_id}
            embersBalance={walletStatus.embers_balance}
            sparksBalance={walletStatus.sparks_balance}
            embersImgSrc={walletStatus.embers_img_src}
            sparksImgSrc={walletStatus.sparks_img_src}
            onShowEmberShop={onShowEmberShop}
        />

    </div>

)

export default Stats;



