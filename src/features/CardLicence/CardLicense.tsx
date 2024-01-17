import { ICardLicence } from "../../entities/Licence/CardLicence";
import Button from "../../shared/ui/ButtonPrim";
import styles from "./Style.module.css"

export interface CardLicenceProps{
    cardInfo: ICardLicence;
    action : () => void;
    buttonContent : string;
}


const CardLicence: React.FC<CardLicenceProps> = ({cardInfo, action, buttonContent}) => {
    return(
        <div className={styles.DivCard}>
            <div className={styles.DivCardWrapper}>
                <img src={cardInfo.image} alt={cardInfo.altImage}></img>
                <p className={styles.LiltleTitle}>Подписка</p>
                {
                    cardInfo.title == "Базовая" 
                    ?  
                    <h2 className={styles.TitleBlack}>{cardInfo.title}</h2>
                    :
                    <h2 className={styles.TitleRed}>{cardInfo.title}</h2>
                }
                <p className={styles.Description}  dangerouslySetInnerHTML={{ __html: cardInfo.description }}>{}</p>
                <div className={styles.ContentDiv}>
                    <>
                        {
                            cardInfo.content.map((item, index) => {
                                return(
                                    <p className={styles.ContentText} key={index}>{item}</p>
                                )
                            })
                        }
                    </>
                </div>
                <Button isDisabled={false} title={buttonContent} onClick={action}></Button>
            </div>
        </div>
    );
}

export default CardLicence;