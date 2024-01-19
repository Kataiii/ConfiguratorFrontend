import PersonRegist from "../assets/images/image-person-regist.svg"
import CompanyRegist from "../assets/images/image-company-regist.svg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./css/BlockCard.module.css"
import CardRegist from "../shared/ui/cards/CardRegist";


const BlockRegistration: React.FC = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.BlockCardWrap}>
            <h1 className={styles.DivRegistTitle}>Регистрация</h1>
            <div className={styles.RegCardDiv}>
                <CardRegist title="Пользовательская" 
                            image={PersonRegist} 
                            altImage="image-file" 
                            action={() => {navigate('/login/register/user')}}/>
                <CardRegist title="Компания" 
                            image={CompanyRegist} 
                            altImage="image-document" 
                            action={() => {navigate('/login/register/company')}}/>
            </div>
            <div className={styles.DivLinks}>
                <p className={styles.textAccount}>У вас уже есть аккаунт?</p>
                <Link to={'/login'}>
                    <p className={styles.textLink}>Войти</p>
                </Link>
            </div>
        </div>
    );
}

export default BlockRegistration;