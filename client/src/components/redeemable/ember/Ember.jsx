import React, { Component } from 'react';
import styles from './Ember.css';

class Ember extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className={styles.dialog}>
                <div className={styles.emberContainer}>
                    <h1>support with embers</h1>
                    <p>Use embers on premium skills to add hype and help Mixer creators earn cash.</p>


                    <div className={styles.contentContainer}>
                        <button className={styles.tile} aria-label="Pile of Embers: Buy 140 embers for $1.99">
                            <div className={styles.offerTitle} aria-hidden="true">Pile of Embers</div>
                            <div className={styles.amount} aria-hidden="true">140</div>
                            <div className={styles.offerImage}>
                                <img src="https://xforgeassets002.xboxlive.com/xuid-2535473787585366/906af992-e528-47c8-994b-e80756b16d64/Embers_01_Pile-of-Embers.png?height=90" alt="ember image" aria-hidden="true" />
                            </div>
                            <div className={styles.cost} aria-hidden="true">$1.99</div>
                        </button>


                        <button className={styles.tile} aria-label="Backpack of Embers: Buy 740 embers for $9.99">
                            <div className={styles.offerTitle} aria-hidden="true">Backpack of Embers</div>
                            <div className={styles.amount} aria-hidden="true">740</div>
                            <div className={styles.offerImage}>
                                <img src="https://xforgeassets002.xboxlive.com/xuid-2535473787585366/66985634-2fa2-4a85-aaad-ae0fe7b5be49/Embers_03_Backpack-of-Embers.png?height=90" alt="ember image" aria-hidden="true" />
                                <div className={styles.promotion} >40 more</div>
                            </div>
                            <div className={styles.cost} aria-hidden="true">$9.99</div>
                        </button>


                        <button className={styles.tile} aria-label="Duffle Bag of Embers: Buy 1900 embers for $24.99">
                            <div className={styles.offerTitle} aria-hidden="true">Duffle Bag of Embers</div>
                            <div className={styles.amount} aria-hidden="true">1,900</div>
                            <div className={styles.offerImage}>
                                <img src="https://xforgeassets002.xboxlive.com/xuid-2535473787585366/50b705ea-4f74-4bf3-a95c-5d4c7dad16aa/Embers_04_Duffle-Bag-of-Embers.png?height=90" alt="ember image" aria-hidden="true" />
                                <div className={styles.promotion} >150 more</div>
                            </div>
                            <div className={styles.cost} aria-hidden="true">$24.99</div>
                        </button>


                        <button className={styles.tile} aria-label="Chest of Embers: Buy 3900 embers for $49.99">
                            <div className={styles.offerTitle} aria-hidden="true">Chest of Embers</div>
                            <div className={styles.amount} aria-hidden="true">3,900</div>
                            <div className={styles.offerImage}>
                                <img src="https://xforgeassets002.xboxlive.com/xuid-2535473787585366/0f1087b6-67c2-40e5-ac3d-ff57e5fb5ffd/Embers_05_Chest-of-Embers.png?height=90" alt="ember image" aria-hidden="true" />
                                <div className={styles.promotion} >400 more</div>
                            </div>
                            <div className={styles.cost} aria-hidden="true">$49.99</div>
                        </button>


                        <button className={styles.tile} aria-label="Trunk of Embers: Buy 8000 embers for $99.99">
                            <div className={styles.offerTitle} aria-hidden="true">Trunk of Embers</div>
                            <div className={styles.amount} aria-hidden="true">8,000</div>
                            <div className={styles.offerImage}>
                                <img src="https://xforgeassets002.xboxlive.com/xuid-2535473787585366/261168dc-772d-449d-9167-17c7b29abdc6/Embers_06_Trunk-of-Embers.png?height=90" alt="ember image" aria-hidden="true" />
                                <div className={styles.promotion}>1000 more</div>
                            </div>
                            <div className={styles.cost} aria-hidden="true">$99.99</div>
                        </button>

                        <button className={styles.tile} aria-label="Wheelbarrow of Embers: Buy 12300 embers for $149.99">
                            <div className={styles.offerTitle} aria-hidden="true">Wheelbarrow of Embers</div>
                            <div className={styles.amount} aria-hidden="true">12,300</div><div className={styles.offerImage}>
                                <img src="https://xforgeassets001.xboxlive.com/xuid-2535473787585366/524ca565-4f31-448b-bd8b-4240f555af91/Embers_06-5_Wheelbarrow-of-Embers.png?height=90" alt="ember image" aria-hidden="true" />
                                <div className={styles.promotion}>1800 more</div>
                            </div>
                            <div className={styles.cost} aria-hidden="true">$149.99</div>
                        </button>

                        <button className={styles.tile} aria-label="Trailer of Embers: Buy 21000 embers for $249.99">
                            <div className={styles.offerTitle} aria-hidden="true">Trailer of Embers</div>
                            <div className={styles.amount} aria-hidden="true">21,000</div>
                            <div className={styles.offerImage}>
                                <img src="https://xforgeassets001.xboxlive.com/xuid-2535473787585366/ab04c17c-779e-43be-950f-46a2ce9d0fe5/Embers_08_Trailer-of-Embers.png?height=90" alt="ember image" aria-hidden="true" />
                                <div className={styles.promotion}>3500 more</div>
                            </div>
                            <div className={styles.cost} aria-hidden="true">$249.99</div>
                        </button>

                        <button className={styles.tile} aria-label="Truckload of Embers: Buy 43000 embers for $499.99">
                            <div className={styles.offerTitle} aria-hidden="true">Truckload of Embers</div>
                            <div className={styles.amount} aria-hidden="true">43,000</div>
                            <div className={styles.offerImage}>
                                <img src="https://xforgeassets002.xboxlive.com/xuid-2535473787585366/d25bf96b-609e-4598-9c76-568cbe045590/Embers_09_Truckload-of-Embers.png?height=90" alt="ember image" aria-hidden="true" />
                                <div className={styles.promotion}>8000 more</div>
                            </div>
                            <div className={styles.cost} aria-hidden="true">$499.99</div>
                        </button>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.balance}>Your Ember balance:
                            <img src="../dist/img/ember24.png" alt="ember coin" aria-hidden="true" />
                            <span>0</span>
                        </div>
                    </div>

                    <button className={styles.closeBtn} aria-label="Close dialog">
                        <span className={`${styles["set-mixer"]} ${styles["icon-Close"]}`}> </span>
                    </button>
                </div>    
            </div>
        )
    }
}

export default Ember;