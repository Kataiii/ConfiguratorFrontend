import styles from "./BlockCard.module.css"
import CardPossibility, {CardProps} from "../shared/ui/CardPossibility";
import { useMemo } from "react";
import House from "../assets/icons/icon-house.svg"
import Sofa from "../assets/icons/icon-sofa.svg"
import Camera from "../assets/icons/icon-camera.svg"



const BlockCards = () => {
    const cardPosibilityItems = useMemo<CardProps[]>(() =>  [
        {
          image: House,
          title: 'Экстерьер',
          content: `Создавай внешний облик </br> здания, обустраивай </br> придомовую территорию,</br> продумай ландшафтный дизайн`,
          alt: 'image-house'
        },
        {
            image: Sofa,
            title: 'Интерьер',
            content: 'Оформляй внутреннее </br> пространство помещения, </br> расставляй мебель, технику </br> и декор по своему вкусу',
            alt: 'image-sofa'
        },
        {
          image: Camera,
          title: 'Безопасность',
          content: 'Проектируй системы </br> безопасности, размещай </br> камеры и датчик в ручном и </br> автоматическом режиме',
          alt: 'image-camera'
        }
      ], [])

    return(
        
        <div className={styles.BlockCard}>
            <>
                <h1 className={styles.DivContent_Div_Title}>Возможности</h1>
                <div className={styles.BlockCardWrapper}>
                    {cardPosibilityItems.map((item, index) => {
                        return(<CardPossibility key={index} title={item.title} image={item.image} content={item.content} alt={item.alt}/>);
                    })}
                </div>
            </>
        </div>
    );
}

export default BlockCards;