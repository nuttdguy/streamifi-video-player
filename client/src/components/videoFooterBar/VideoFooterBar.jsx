import React from 'react';
import css from './VideoFooterBar.css';


const VideoFooterBar = ({ onShowMenu, stream, btnText, avatarImgSrc, skillsImgSrc, eyeImgSrc }) => (

    <div className={css.backgroundFooter} >

        <Avatar avatarImgSrc={avatarImgSrc} />

        <FooterContent
            title={stream.title}
            views={stream.viewers_total}
            subheading={stream.subheading}
            audience={stream.audience}
            eyeImgSrc={eyeImgSrc} />

        <SkillsAction
            skillsImgSrc={skillsImgSrc}
            btnText={btnText}
            onShowMenu={onShowMenu} />

    </div>
)

export default VideoFooterBar;


const FooterContent = ({ title, viewers_total, subheading, audience, eyeImgSrc}) => (
    <div className={css.childDescription}>
        <p className={css.title}> {title}

            <span className={css.viewCount}>
                <img className={css.eye} src={eyeImgSrc} />
                {!viewers_total ? '00' : viewers_total}</span>
        </p>
        <p className={css.subtitle}> {subheading}
            <span className={css.audience}>{audience}</span>
        </p>
    </div>
)

const SkillsAction = ({ skillsImgSrc, btnText, onShowMenu }) => (
    <div className={css.childSkills}>
        <div className={css.childSkillsImg}>
            <img src={skillsImgSrc} />
        </div>
        <div className={css.flexGrow132}>
            <button onClick={onShowMenu}>{btnText}</button>
        </div>
    </div>
)


const Avatar = ({ avatarImgSrc }) => (
    <div className={css.childAvatar}>
        <img src={avatarImgSrc} />
    </div>
)