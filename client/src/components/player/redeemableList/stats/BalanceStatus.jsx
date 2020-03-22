import React from 'react';
import css from './BalanceStatus.css';


const BalanceStatus = ({ sparksImgSrc, sparksBalance, embersImgSrc, embersBalance, onShowEmberShop }) => (

    <div className={css.balanceContainer}>

        <div className={css.sparkContainer}>
            <img src={sparksImgSrc} />
            <span className={css.balance}>{sparksBalance}</span>
        </div>

        <div className={css.emberContainer}>
            <img src={embersImgSrc} />
            <span className={css.balance}>{embersBalance}</span>
            <button onClick={onShowEmberShop}>
                <span>+</span>
            </button>
        </div>
    </div>

)

export default BalanceStatus;