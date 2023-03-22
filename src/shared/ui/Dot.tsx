import React, {useContext} from "react";
import { SliderContext } from "../../widgets/Slider";
import DotActive from "../../assets/icons/icon-active-dot.svg"
import DotNotActive from "../../assets/icons/icon-default-dot.svg"
import styles from "./css/SliderComponents.module.css"


const Dot = (props: {numberSlide: number}) => {
    const {goToSlide, slideNumber} = useContext(SliderContext); 

    return(
        <div onClick={goToSlide(slideNumber)} className={styles.Dot}>
            {
                props.numberSlide <= slideNumber ?
                (
                    <img src={DotActive} alt='active-dot'></img>
                ) 
                :
                (
                    <img src={DotNotActive} alt='not-active-dot'></img>
                )
            }
        </div>
    );
}

export default Dot;