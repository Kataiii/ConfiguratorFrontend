import React from "react";
import ReactPlayer from 'react-player'
import styles from "./css/Video.module.css"

const WEBPATHVIDEO = 'http://127.0.0.1:9000'

const Video = () => {
    return(
        <div>
            <ReactPlayer className={styles.VideoDiv} 
                        //url='https://www.youtube.com/watch?v=a_IA-8nQ4FY&t=1s&ab_channel=Kittisaurus'
                        url={`${WEBPATHVIDEO}/video.mp4`}
                        controls={true}
            />
        </div>
    );
}

export default Video;