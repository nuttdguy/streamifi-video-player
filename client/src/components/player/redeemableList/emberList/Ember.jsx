import React from 'react';
import css from './Ember.css';

const Ember = ({ label, offerTitle, amount, offerImgSrc, alt, promotion, cost, onBuyEmbers}) => (
    <button 
        onClick={() => onBuyEmbers(amount)} 
        className={css.tile} 
        aria-label={label}>

        <div className={css.offerTitle} >{offerTitle}</div>
        <div data-amount={amount} className={css.amount} >{amount}</div>
        <div className={css.offerImage} >
            <img src={offerImgSrc} alt={alt} />
            <div className={css.promotion} >{promotion}</div>
        </div>
        <div className={css.cost} >{cost}</div>
    </button>
)

export default Ember;