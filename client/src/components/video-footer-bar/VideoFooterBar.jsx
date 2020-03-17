import React, { Component } from 'react';
import styles from './VideoFooterBar.css';


class VideoFooterBar extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const { onShowRedeemableMenu } = this.props;

        return (
            <div className={styles.backgroundFooter } >

                <div className={styles.childAvatar }>
                    <img src='../dist/img/avatar64.jpg' />
                </div>

                <div className={styles.childDescription }>
                    <p className={styles.title}>xbox is down lets hang in there / Streamloots Partner / #RGS <span className={styles.viewCount}>54</span></p>
                    <p className={styles.subtitle}>The Jackbox Party Pack 3 <span className={styles.audience}> 18+ Stream </span></p>
                </div>

                <div className={styles.childSkills }>
                    <div className={styles.childSkillsImg}>
                        <img src='../dist/img/skils-icon.svg' />
                    </div>
                    <div className={styles.flexGrow132}>
                        <button onClick={onShowRedeemableMenu}>Skills</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoFooterBar;
