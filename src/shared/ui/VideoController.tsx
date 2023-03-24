import React from "react";
import Pause from "../../assets/icons/icon-pause.svg"
import styles from "./css/Video.module.css"

export interface VideoControllerProps{
    action : () => void,
    isPause : boolean
}

const VideoController = (props: VideoControllerProps) => {
    const activePause = props.isPause ? styles.PauseDiv : styles.PauseDivNone
    const activePauseDiv = props.isPause ? styles.PauseDivImage : styles.PauseDivImageNone
    const activePauseImage = props.isPause ? styles.PauseImage : styles.PauseImageNone

    return(
        <div className={styles.PauseDivWrapper} /*onClick={props.action}*/>
            <div className={activePause}>
                <button className={activePauseDiv} onClick={props.action}>
                    <img className={activePauseImage} src={Pause}></img>
                </button>
            </div>
        </div>
    );
}

export default VideoController;