import House from "../assets/images/house.svg";
import styles from "../app/App.module.css"
import Button from "../shared/ui/ButtonPrim";
import {useNavigate} from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.Bunner}>
            <div className={styles.Bunner_DivContent_Div}>
                <div className={styles.DivContent_Div}>
                    <h1 className={styles.DivContent_Div_Title}>Проектируй дом из дома</h1>
                    <div className={styles.DivContent_Div_Wrapper}>
                        <p className={styles.PText}>Проектируй дома и бани. Возводи склады и гаражи <br /> 
                        Размещай камеры видеонаблюдения и датчики <br /> безопасности. 
                        Создавай проекты и отправляй на <br /> оценку Исполнителю</p>
                    </div>
                    <Button title='Создать проект' onClick={() => navigate('login', { replace: false })}></Button>
                </div>
            </div>
            <img className={styles.ImgHouse} src={House}></img>
        </div>
    );
}

export default Banner;