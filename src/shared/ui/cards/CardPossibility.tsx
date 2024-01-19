import styles from "../css/CardPosibility.module.css"

export interface CardProps{
    image : any,
    title : string,
    content : string,
    alt : string
}


const CardPossibility : React.FC<CardProps> = (props) => {
    return(
        <div className={styles.CardDiv}>
            <img className={styles.CardDiv_Img} src={props.image} alt={props.alt}/>
            <h2 className={styles.CardDiv_Title}>{props.title}</h2>
            <p className={styles.CardDiv_P} dangerouslySetInnerHTML={{ __html: props.content }}></p>
        </div>
    );
}

export default CardPossibility;