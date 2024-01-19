import React, { createContext, useState, useEffect } from "react";
import styles from "./css/Slider.module.css"
import SlidesList from "../features/SlidesList";
import Dots from "../features/Dots";
import { getImages } from "../shared/api/ImagesApi";
import { SlideProps } from "../shared/ui/forSlider/Slide";
import SliderArrow from "../shared/ui/forSlider/SliderArrow";

export interface SliderProps {
    autoPlay: boolean,
    autoPlayTime: number,
    width: string,
    height: string
}

export class sliderContext {
    slideNumber: number = 0;
    items: SlideProps[] = [];
    changeSlide: (direction: number) => any = () => { };
    sliderCount: number = 4;
    goToSlide: (number: number) => any = () => { };
}

export const SliderContext = createContext(new sliderContext());

const Slider: React.FC<SliderProps> = ({width, height, autoPlay, autoPlayTime}) => {
    const [items, SetItems] = useState<SlideProps[]>([]);
    const [slide, SetSlide] = useState(0);
    const [touchPosition, SetTouchPosition] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const images = await getImages(4);
            SetItems(images);
        };
        loadData();
    }, []);

    const changeSlide = (direction: number) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        SetSlide(slideNumber);
    }

    const goToSlide = (numberSlide: number) => {
        SetSlide(numberSlide % items.length);
    }

    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX;
        SetTouchPosition(touchDown);
    }

    const handleTouchMove = (e: any) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 4) {
            changeSlide(1);
        }

        if (direction < -4) {
            changeSlide(-1);
        }
        SetTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]);

    return (
        <div className={styles.SliderWrapper}>
            <h1 className={styles.DivContent_Div_Title}>Проекты пользователей</h1>
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    sliderCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                <div className={styles.SliderContainer} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className={styles.DivSliderContainer}>

                        <SliderArrow key={'arrow-0'} directionArrow={-1} rotate={0}></SliderArrow>
                        <div className={styles.Slider}>
                            <SlidesList></SlidesList>
                        </div>
                        <SliderArrow key={'arrow-1'} directionArrow={1} rotate={180}></SliderArrow>

                    </div>
                </div>
                <Dots></Dots>
            </SliderContext.Provider>
        </div>
    );
}

export default Slider;