import React, { useState } from 'react';
import { Slider } from 'antd';
import styles from './css/Video.module.css'
import Volume from '../../assets/icons/icon-volume-up.svg'
import NoVolume from '../../assets/icons/icon-volume-mute.svg'
import Screen from '../../assets/icons/icon-full-screen.svg'

interface IconSliderProps {
    max: number;
    min: number;
    volume: number;
    action: (value : number) => void
}

const VideoVolume: React.FC<IconSliderProps> = (props) => {
    const { max, min } = props;
    const [value, setValue] = useState(0);

    const mid = Number(((max - min) / 2).toFixed(5));

    return (
        <div className={styles.VolumeDivWrapper}>
            <div className={styles.VolumeDiv}>
                {
                    props.volume == 0 
                    ?
                        <img className={styles.ImageVolume} src={NoVolume} alt={'volume'}></img>
                    :
                        <img className={styles.ImageVolume} src={Volume} alt={'not-volume'}></img>
                }
                
                <Slider min={props.min} 
                        max={props.max} 
                        value={props.volume} 
                        className={styles.Slider} 
                        onChange={props.action}/>
            </div>
            {/*<img src={Screen} className={styles.ImageScreen}></img>*/}
        </div>
    );
};

export default VideoVolume;