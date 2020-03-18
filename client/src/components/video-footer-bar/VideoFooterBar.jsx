import React, { Component } from 'react';
import styles from './VideoFooterBar.css';


class VideoFooterBar extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const { onShowMenu } = this.props;

        return (
            <div className={styles.backgroundFooter } >

                <div className={styles.childAvatar }>
                    <img src='../dist/img/avatar64.jpg' />
                </div>

                <div className={styles.childDescription }>
                    <p className={styles.title}>xbox is down lets hang in there / Streamloots Partner / #RGS 
                        <span className={styles.viewCount}>
                            <img className={styles.eye} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABcklEQVRIie2UwUpCURCG54Y7JSva5UVI6NKqNxBp1yO0rh6iRb2Lq1AEN6EgBJJtXCTUwo1JL2CCSrX82vzR6XhTg8iNAwcu8/0z55yZe8ZsZcu2YBYEtszs2MyOzOzAzLaFBmb2YGZ1M7sKgmD4q12BBHAOTJhvE2kTiybPAG0nQQM4ASIgqRXJ13B0bSAzL3kW6CvgCcgvcKA80FNMH8j+JEwBXQlvgQ2HhUAFGGtVgcjhaaCp2C6QitugKEHHFSj5S0zth0DoHbAjVvSTFwTegJzHKmLXwI56VJOv7GlzygFQcEFLzsuYm43FMo4vlG8Uo78Qa5mZrfl8qnazLU7v5/xWoldg12NVsZrKEwJ1+Uqedg94nyqR4GeT74Gk44/UUN8GXtnWgcfYJkvg/qZNIO2wECgDI62Sl3wTuFNs/G8qYZavh9ZjsYd2CDwr5ueH5gTEjYpTYF+3TOn7DLhxdPNHhbPJnw275Yzrlf2rfQDAlLqI49Y60wAAAABJRU5ErkJggg=="/>
                        54</span>
                    </p>
                    <p className={styles.subtitle}>The Jackbox Party Pack 3 <span className={styles.audience}> 18+ Stream </span></p>
                </div>

                <div className={styles.childSkills }>
                    <div className={styles.childSkillsImg}>
                        <img src='../dist/img/skils-icon.svg' />
                    </div>
                    <div className={styles.flexGrow132}>
                        <button onClick={onShowMenu}>Skills</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoFooterBar;
