import React, { useContext } from "react";
import { SliderContext } from "../widgets/Slider";
import Dot from "../shared/ui/forSlider/Dot";
import styles from "../app/App.module.css"


const Dots: React.FC = () => {
    const { sliderCount } = useContext(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i: number = 0; i < sliderCount; i++) {
            dots.push(
                <Dot key={`dot-${i}`} numberSlide={i}></Dot>
            );
        }

        return dots;
    }

    return (
        <div className={styles.DivDots}>
            {renderDots()}
        </div>
    );
}

export default Dots;