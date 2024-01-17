import CardLicence, {CardLicenceProps} from "./CardLicence/CardLicense";
import { useMemo } from "react";
import styles from "./css/BlockCard.module.css"
import { useNavigate } from "react-router-dom";
import Person from "../assets/icons/icon-person.svg"
import Bag from "../assets/icons/icon-bag.svg"
import Student from "../assets/icons/icon-student.svg"


const BlockCardLicencce = () => {
    const navigate = useNavigate();

    const cardLicences = useMemo<CardLicenceProps[]>(() =>  [
        {
            cardInfo: {
                title: 'Базовая',
                altImage: 'person',
                description: 'Пробная подписка для дальнейшего </br> оформления',
                content: [
                    'Неограниченное количество того-то',
                    'Чуть-чуть другого',
                    'И еще вот это',
                    'И это тоже'
                ],
                image : Person
            },
            buttonContent: 'Бесплатно',
            action: () => navigate('/login')
        },
        {
            cardInfo: {
                title: 'Стандартная',
                altImage: 'bag-standart',
                description: 'Стандартная подписка со всем </br> функционалом',
                content: [
                    'Неограниченное количество того-то',
                    'Чуть-чуть другого',
                    'И еще вот это',
                    'И это тоже'
                ],
                image : Bag
            },
            buttonContent: 'Оформить за 1500/мес',
            action: () => navigate('/')
        },
        {
            cardInfo: {
                title: 'Коммерческая',
                altImage: 'student',
                description: 'Весь функционал и возможность </br> продавать свои услуги',
                content: [
                    'Неограниченное количество того-то',
                    'Чуть-чуть другого',
                    'И еще вот это',
                    'И это тоже'
                ],
                image : Student
            },
            buttonContent: 'Оформить за 2500/мес',
            action: () => navigate('/')
        }
    ], []);

    return(
        <div className={styles.BlockCardWrap}>
            <h1 className={styles.DivContent_Div_Title}>Подписки</h1>
            <div className={styles.BlockCardDiv}>
                <>
                    {
                        cardLicences.map((item, index) => {
                            return(
                                <CardLicence 
                                            cardInfo={item.cardInfo}
                                            buttonContent={item.buttonContent}
                                            action={item.action}/>
                            );
                        })
                    }
                </>
            </div>
        </div>
    )
}

export default BlockCardLicencce;