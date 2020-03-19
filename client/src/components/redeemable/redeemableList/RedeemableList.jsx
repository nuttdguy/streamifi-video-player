import React, { Fragment } from 'react';
import styles from './RedeemableList.css';


const RedeemableList = (props) => (

    <ul className={styles.dataSection}>
        <div id={props.categoryHeader} className={styles.categoryHeader}>{props.categoryHeader}</div>
        <div className={styles.categoryContent}>

            {props.redeemables.map(redeemable => {
                return (
                    <li className={styles.gridTile} 
                        key={redeemable.redeemables_id}
                        onClick={props.donateRedeemable}>

                        <img className={styles.gridImage} 
                            src={redeemable.img} alt="redeemableItem" ></img>

                        <button className={styles.gridButton} 
                                name={redeemable.price_category}>

                            <img className={styles.currencyCoin} 
                                src={redeemable.price_category_url}></img>
                            
                            <span className={styles.gridTileCost}>{redeemable.price}</span>
                        </button>

                    </li>
                )
            })}

        </div>
    </ul>
)


export default RedeemableList;