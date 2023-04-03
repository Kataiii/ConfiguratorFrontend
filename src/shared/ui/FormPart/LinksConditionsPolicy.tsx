import { Link } from "react-router-dom";
import styles from './css/InputForm.module.css'


const LinksConditionsPolicy = () => {
    return(
        <div className={styles.LinksDiv}>
            <p className={styles.LinksContext}>Регистрируясь, вы соглашаетесь с нашими условиями использования, включая <Link className={styles.LinksLinks} to={'/document/privacy_policy'}>Политику конфиденциальности</Link>  и  <Link className={styles.LinksLinks} to={'/document/cookie_policy'}>Политику использования файлов cookie</Link></p>
        </div>
    )
}

export default LinksConditionsPolicy;