import Button from "../../../shared/ui/ButtonPrim";
import styles from "./Style.module.css"

export interface CardLicenceProps{
    image : any,
    altImage : string,
    title : string,
    description: string,
    content : string[],
    action : () => void,
    buttonContent : string
}


const CardLicence = (props : CardLicenceProps) => {
    return(
        <div className={styles.DivCard}>
            <div className={styles.DivCardWrapper}>
                <img src={props.image} alt={props.altImage}></img>
                <p className={styles.LiltleTitle}>Подписка</p>
                {
                    props.title == "Базовая" 
                    ?  
                    <h2 className={styles.TitleBlack}>{props.title}</h2>
                    :
                    <h2 className={styles.TitleRed}>{props.title}</h2>
                }
                <p className={styles.Description}  dangerouslySetInnerHTML={{ __html: props.description }}>{}</p>
                <div className={styles.ContentDiv}>
                    <>
                        {
                            props.content.map((item, index) => {
                                return(
                                    <p className={styles.ContentText} key={index}>{item}</p>
                                )
                            })
                        }
                    </>
                </div>
                <Button isDisabled={false} title={props.buttonContent} onClick={props.action}></Button>
            </div>
        </div>
    );
}

export default CardLicence;