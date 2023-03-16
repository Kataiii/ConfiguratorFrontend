import House from "../assets/images/house.svg";
import styles from "../app/App.module.css"

const Banner = () => {
    const imgHouse : string = styles.ImgHouse;

    return(
        <div>
            <img src={House}></img>
        </div>
    );
}

export default Banner;