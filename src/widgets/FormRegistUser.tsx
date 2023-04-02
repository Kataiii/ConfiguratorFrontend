import styles from "./css/Form.module.css"
import { Link } from "react-router-dom";
import FormVersionTwo from "../shared/ui/FormPart/FormVersionTwo";


const FormRegistUser = () => {

    return (
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
    )
}

export default FormRegistUser;