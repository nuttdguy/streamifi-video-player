import React from 'react';
import css from  './RedeemableItem.css';


const RedeemableItem = ({ donateRedeemable, alt, redeemableImgSrc, priceCategory, priceCategoryImgSrc, price }) => (
    <li className={css.gridTile}
        onClick={donateRedeemable}>

        <img className={css.gridImage}
            src={redeemableImgSrc} alt={alt} ></img>

        <button className={css.gridButton}
            name={priceCategory}>

            <img className={css.currencyCoin}
                src={priceCategoryImgSrc}></img>

            <span className={css.gridTileCost}>{price}</span>
        </button>

    </li>
)

export default RedeemableItem;