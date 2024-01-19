import Tick from "../../../assets/icons/icon-tick-square.svg"
import styles from "../css/CardAdvantage.module.css"

export interface CardAdvantageProps{
    title: string,
    content: string
}


const CardAdvantage = (props : CardAdvantageProps) => {
    return(
        <div>
            <img src={Tick} alt='check_mark'/>
            <h2 className={styles.CardTitle}>{props.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.content }} className={styles.CardContent}></p>
        </div>
    );
}

export default CardAdvantage;