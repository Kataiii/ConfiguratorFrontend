import styles from "./css/BlockCard.module.css"
import Button from "../shared/ui/ButtonPrim";
import { useNavigate } from "react-router-dom";
import VideoController, {VideoControllerProps} from "../shared/ui/VideoController";
import ReactPlayer from 'react-player'
import stylesVideo from "../shared/ui/css/Video.module.css"
import React, {useState} from "react";
import VideoVolume from "../shared/ui/VideoVolume";

const WEBPATHVIDEO = 'http://127.0.0.1:9000'

interface IVideo{
    playing : boolean
}

const VideoPlayer = () => {
    const navigate = useNavigate();
    const [video, setVideo] = useState<IVideo>({
        playing : false
    })

    const handlePlay = () => {setVideo({
        ...video, playing : !video.playing
    })}

    return(
        <div className={styles.BlockVideoPlayer}>
            <h2 className={styles.TitleVideoPlayer}>Обучающий ролик</h2>
            <div className={stylesVideo.VideoDiv}>
                <ReactPlayer  url={`${WEBPATHVIDEO}/video.mp4`}
                              controls={false}
                              playing={video.playing}
                />
                <VideoController isPause={!video.playing} action={handlePlay}/>
                <VideoVolume min={0} max={100}></VideoVolume>
            </div>
            <Button title="Попробовать!" onClick={() => navigate('/login')}></Button>
        </div>
    )
}

export default VideoPlayer;