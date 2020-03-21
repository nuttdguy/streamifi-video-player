import React from 'react';
import css from './LevelStatus.css'

const LevelStatus = ({ level }) => (

    <div className={css.levelContainer}>

        <div className={css.level} >
            <span>LVL {level}</span>
        </div>
    </div>

)

export default LevelStatus;