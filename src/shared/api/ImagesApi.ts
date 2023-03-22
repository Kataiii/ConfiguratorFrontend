import { useMemo } from "react";
import { SlideProps } from "../ui/Slide";
import Image1 from "../../assets/images/image-slider-pic1.svg"
import Image2 from "../../assets/images/image-slider-pic2.svg"

export const getImages = (length : number) => {
    const sliderProps = [
        {
            title: 'Картинка 1',
            srcImage: Image1
        },
        {
            title: 'Картинка 2',
            srcImage: Image2
        },
        {
            title: 'Картинка 3',
            srcImage: Image1
        },
        {
            title: 'Картинка 4',
            srcImage: Image2
        }
    ];
    // return fetch(`https://api.thecatapi.com/v1/breeds`)
    // .then((response) => response.json())
    // .then((response) => {
    //   const images : any[] = [];
    //   response.forEach((c : any) => {
    //     const title = c?.description;
    //     const url = c?.image?.url;

    //     images.push({ title, url });
    //   });
    //   return images.slice(0, length); // remove the extra cats
    // });
    return sliderProps;
}