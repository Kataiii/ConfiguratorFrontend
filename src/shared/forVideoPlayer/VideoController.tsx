import React from "react";
import Pause from "../../assets/icons/icon-pause.svg"
import styles from "../ui/css/Video.module.css"

export interface VideoControllerProps{
    action : () => void,
    isPause : boolean
}

const VideoController: React.FC<VideoControllerProps> = ({action, isPause}) => {
    const activePause = isPause ? styles.PauseDiv : styles.PauseDivNone
    const activePauseDiv = isPause ? styles.PauseDivImage : styles.PauseDivImageNone
    const activePauseImage = isPause ? styles.PauseImage : styles.PauseImageNone

    return(
        <div className={styles.PauseDivWrapper} /*onClick={props.action}*/>
            <div className={activePause}>
                <button className={activePauseDiv} onClick={action}>
                    <img className={activePauseImage} src={Pause}></img>
                </button>
            </div>
        </div>
    );
}

export default VideoController;