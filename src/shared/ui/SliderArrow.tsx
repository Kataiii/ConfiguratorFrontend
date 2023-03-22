import React, {useContext} from "react";
import { SliderContext } from "../../widgets/Slider";
import Arrow from "../../assets/icons/icon-arrow.svg"
import styles from "./css/SliderComponents.module.css"

export interface arrowProps{
    directionArrow : number,
    rotate : number
}

const SliderArrow = (props : arrowProps) => {
    const { changeSlide } = useContext(SliderContext);
    const className = props.rotate == 0 ? styles.ArrowRigth : styles.ArrowLeft;

    return(
        <div className={styles.ContainerArrow}>
            <img  src={Arrow} className={className}
                 onClick={() => {changeSlide(props.directionArrow)}}></img>
        </div>
    );
}

export default SliderArrow;