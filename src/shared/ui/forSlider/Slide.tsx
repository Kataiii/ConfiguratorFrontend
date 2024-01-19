import styles from "../css/Slide.module.css";

export interface SlideProps{
    title : string,
    srcImage : string
}

const Slide = (props : SlideProps) => {
    return(
        <div>
            <h2 className={styles.SlideTitle}>{props.title}</h2>
            <div className={styles.SlideWrapperImage}>
                <img src={props.srcImage}></img>
            </div>
        </div>
    );
}

export default Slide;