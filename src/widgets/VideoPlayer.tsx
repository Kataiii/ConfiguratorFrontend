import styles from "./css/BlockCard.module.css"
import Button from "../shared/ui/ButtonPrim";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'
import stylesVideo from "../shared/ui/css/Video.module.css"
import {useState} from "react";
import VideoVolume from "../shared/forVideoPlayer/VideoVolume";
import VideoController from "../shared/forVideoPlayer/VideoController";

const WEBPATHVIDEO = 'http://127.0.0.1:9000'

interface IVideo{
    playing : boolean,
    volume : number
}

const VideoPlayer: React.FC = () => {
    const navigate = useNavigate();
    const [video, setVideo] = useState<IVideo>({
        playing : false,
        volume : 0
    })

    const handlePlay = () => {
        setVideo({
            ...video, playing : !video.playing
        })
    }

    const handleVolume = (value : number) => {
        setVideo({
            ...video, volume : value
        })
    }

    return(
        <div className={styles.BlockVideoPlayer}>
            <h2 className={styles.TitleVideoPlayer}>Обучающий ролик</h2>
            <div className={stylesVideo.VideoDiv}>
                <ReactPlayer  url={`${WEBPATHVIDEO}/video.mp4`}
                              controls={false}
                              playing={video.playing}
                              volume={(video.volume / 100)}
                />
                <VideoController isPause={!video.playing} action={handlePlay}/>
                
                <VideoVolume min={0} max={100} volume={video.volume} action={handleVolume}></VideoVolume>
            </div>
            <Button isDisabled={false} title="Попробовать!" onClick={() => navigate('/login')}></Button>
        </div>
    )
}

export default VideoPlayer;