import CardLicence, {CardLicenceProps} from "../entities/Licence/ui/CardLicense";
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
            title: 'Базовая',
            altImage: 'person',
            description: 'Пробная подписка для дальнейшего </br> оформления',
            content: [
                'Неограниченное количество того-то',
                'Чуть-чуть другого',
                'И еще вот это',
                'И это тоже'
            ],
            buttonContent: 'Бесплатно',
            action: () => navigate('/'),
            image : Person
        },
        {
            title: 'Стандартная',
            altImage: 'bag-standart',
            description: 'Стандартная подписка со всем </br> функционалом',
            content: [
                'Неограниченное количество того-то',
                'Чуть-чуть другого',
                'И еще вот это',
                'И это тоже'
            ],
            buttonContent: 'Оформить за 1500/мес',
            action: () => navigate('/'),
            image : Bag
        }
        ,
        {
            title: 'Коммерческая',
            altImage: 'student',
            description: 'Весь функционал и возможность </br> продавать свои услуги',
            content: [
                'Неограниченное количество того-то',
                'Чуть-чуть другого',
                'И еще вот это',
                'И это тоже'
            ],
            buttonContent: 'Оформить за 2500/мес',
            action: () => navigate('/'),
            image : Student
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
                                <CardLicence key={index} 
                                            title={item.title}
                                            description={item.description}
                                            content={item.content}
                                            image={item.image}
                                            altImage={item.altImage}
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