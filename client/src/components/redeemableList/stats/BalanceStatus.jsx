import React from 'react';
import css from './BalanceStatus.css';


const BalanceStatus = ({ sparksImgSrc, sparksBalance, embersImgSrc, embersBalance, onShowShop }) => (

    <div className={css.balanceContainer}>

        <div className={css.sparkContainer}>
            <img src={sparksImgSrc} />
            <span>{sparksBalance}</span>
        </div>

        <div className={css.emberContainer}>
            <img src={embersImgSrc} />
            <span>{embersBalance}</span>
            <button onClick={onShowShop}>
                <span>+</span>
            </button>
        </div>
    </div>

)

export default BalanceStatus;