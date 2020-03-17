import React, { Component } from 'react';
import styles from './Fake.css';

class Fake extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={styles.parentContainer} >
                <div className={styles.parentOverlay}></div>
                {/* restyle and contain the redeemables window */}

                <div className={styles.outerScrollWindow}>
                    <div className={styles.menubar}>
                        <ul>
                            <li>[L]</li>
                            <li>Embers</li>
                            <li>Sparks</li>
                            <li>Channel</li>
                            <li>[R]</li>
                        </ul>
                    </div>

                    <div className={styles.innerScrollWindow}>
                        <div>
                            <p>subheading</p>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <div>
                            <div>
                                <li>level</li>
                            </div>
                        </div>
                        <div>
                            <div>
                                <li>level</li>
                            </div>
                        </div>
                        <div>
                            <div>
                                <li>level</li>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default Fake;