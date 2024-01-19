import styles from "./css/BlockCard.module.css"
import PartnerUrbus from "../assets/images/partner-urbus.svg"
import PartnerSstu from "../assets/images/partner-sstu.svg"


const BlockPartners: React.FC = () => {
    const partnersProps : any[] = [
        PartnerUrbus,
        PartnerSstu,
        PartnerSstu
    ]


    return(
        <div className={styles.DivPartners}>
            <h1 className={styles.DivContent_Div_Title}>Партнеры</h1>
            <div className={styles.DivImages}>
                <>
                    {
                        partnersProps.map((item, index) => {
                            return(
                                 <img className={styles.DivImage}  src={item} key={index}></img>
                            )
                        })
                    }
                </>
            </div>
        </div>
    );
}

export default BlockPartners;