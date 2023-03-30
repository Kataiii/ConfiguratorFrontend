import Button from "./ButtonPrim";
import styles from "./css/CardRegister.module.css"


export interface cardRegistProps{
    image: any,
    title: string,
    altImage: string
    action: () => void
}

const CardRegist = (props: cardRegistProps) => {
    return(
        <div className={styles.CardDiv}>
            <h1 className={styles.CardTitle}>{props.title}</h1>
            <img className={styles.CardImage} src={props.image} alt={props.altImage}></img>
            <Button isDisabled={false} title="Регистрация" onClick={props.action}></Button>
        </div>
    );
}

export default CardRegist;