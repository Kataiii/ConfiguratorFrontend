import styles from "./css/Form.module.css"
import { Link } from "react-router-dom";
import FormVersionTwo from "../shared/ui/FormPart/FormVersionTwo";
import LinksConditionsPolicy from "../shared/ui/FormPart/LinksConditionsPolicy";


const FormRegistUser = () => {

    return (
        <div>
            <div className={styles.FormDivReg}>
                <h1 className={styles.FormTitle}>Регистрация</h1>
                <div className={styles.FormDivWrapLink}>
                    <p className={styles.FormContent}>У вас уже есть аккаунт?  </p>
                    <Link to={'/login'} className={styles.FormLinkWrap}>
                        <p className={styles.FormLink}>Войти</p>
                    </Link>
                </div>
                <FormVersionTwo></FormVersionTwo>
            </div>
            <LinksConditionsPolicy/>
        </div>
    )
}

export default FormRegistUser;