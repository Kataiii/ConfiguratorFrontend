import React, { useContext } from "react";
import { SliderContext } from "../widgets/Slider";
import styles from "../app/App.module.css";
import Slide from "../shared/ui/forSlider/Slide";


const SlidesList: React.FC = () => {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div className={styles.SlideList} style={{ transform: `translateX(-${slideNumber * 100}%)` } as React.CSSProperties}>
            <>
                {
                    items.map((slide, index) => {
                        return (
                            <Slide key={`slide-${index}`} title={slide.title} srcImage={slide.srcImage}></Slide>
                        );
                    })
                }
            </>
        </div>
    );
}

export default SlidesList;