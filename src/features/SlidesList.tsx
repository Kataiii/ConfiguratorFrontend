import React, {useContext} from "react";
import Slide from "../shared/ui/Slide";
import { SliderContext } from "../widgets/Slider";
import styles from "../app/App.module.css"


const SlidesList = () => {
    const {slideNumber, items} = useContext(SliderContext);

    return(
        <div className={styles.SlideList} style={{ transform: `translateX(-${slideNumber * 100}%)`  } as React.CSSProperties}>
            <>
                {
                    items.map((slide, index) => {
                        return(
                        <Slide key={`slide-${index}`} title={slide.title} srcImage={slide.srcImage}></Slide>
                        );
                    })
                }
            </>
        </div>
    );
}

export default SlidesList;