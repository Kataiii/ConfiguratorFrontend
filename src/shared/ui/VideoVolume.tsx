import React, { useState } from 'react';
import { Slider } from 'antd';
import styles from './css/Video.module.css'
import Tick from '../../assets/icons/icon-tick-square.svg'

interface IconSliderProps {
    max: number;
    min: number;
}

const VideoVolume: React.FC<IconSliderProps> = (props) => {
    const { max, min } = props;
    const [value, setValue] = useState(0);

    const mid = Number(((max - min) / 2).toFixed(5));

    return (
        <div className={styles.VolumeDivWrapper}>
            <div className={styles.VolumeDiv}>
                <img src={Tick}></img>
                <Slider {...props} onChange={setValue} value={value} className={Tick}/>
            </div>
        </div>
    );
};

export default VideoVolume;