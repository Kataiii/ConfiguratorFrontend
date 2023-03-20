import { useMemo } from "react";
import CardAdvantage, {CardAdvantageProps} from "../shared/ui/CardAdvantage";
import styles from "./css/BlockCard.module.css"


const BlockCardsAdvantages = () => {
    const cardAdvantages = useMemo<CardAdvantageProps[]>(() =>  [
        {
            title: 'Преимущество',
            content: `Текст текст текст текст </br>
                Тексттекст текст текст </br>
                Текст текст текст текст `
        },
        {
            title: 'Преимущество',
            content: `Текст текст текст текст </br>
                Тексттекст текст текст </br>
                Текст текст текст текст `
        },
        {
            title: 'Преимущество',
            content: `Текст текст текст текст </br>
                Тексттекст текст текст </br>
                Текст текст текст текст `
        },
        {
            title: 'Преимущество',
            content: `Текст текст текст текст </br>
                Тексттекст текст текст </br>
                Текст текст текст текст `
        },
        {
            title: 'Преимущество',
            content: `Текст текст текст текст </br>
                Тексттекст текст текст </br>
                Текст текст текст текст `
        },
        {
            title: 'Преимущество',
            content: `Текст текст текст текст </br>
                Тексттекст текст текст </br>
                Текст текст текст текст `
        }
    ], []);

    return(
        <div className={styles.BlockCard}>
            <>
                <h1 className={styles.DivContent_Div_Title}>Режимы редактора</h1>
                <div className={styles.BlockCardAdvantagesWrapper}>
                    {
                        cardAdvantages.map((item, index) => {
                            return(<CardAdvantage key={index} title={item.title} content={item.content}></CardAdvantage>);
                        })
                    }
                </div>
            </>
        </div>
    );
}

export default BlockCardsAdvantages;