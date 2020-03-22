import React from 'react';
import RedeemableItem from './RedeemableItem.jsx';

import css from './Redeemable.css';


const Redeemable = ({redeemables, donateRedeemable, categoryHeader}) => (

    <ul className={css.dataSection}>
        <div id={categoryHeader} className={css.categoryHeader}>{categoryHeader}</div>
        <div className={css.categoryContent}>

            {redeemables.map(redeemable => {
                return (
                    <RedeemableItem 
                        key={redeemable.redeemable_id}
                        donateRedeemable={donateRedeemable}
                        alt={"redeemableItem"}
                        redeemableImgSrc={redeemable.img}
                        priceCategory={redeemable.price_category}
                        priceCategoryImgSrc={redeemable.price_category_url}
                        price={redeemable.price} />
                )
            })}

        </div>
    </ul>
)


export default Redeemable;
