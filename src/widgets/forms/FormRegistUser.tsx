import styles from "../css/Form.module.css"
import { Link } from "react-router-dom";
import FormVersionTwo from "../../shared/ui/FormPart/FormVersionTwo";
import LinksConditionsPolicy from "../../shared/ui/FormPart/LinksConditionsPolicy";
import { HeaderForm } from "../../shared/ui/FormPart/HeaderForm";


const FormRegistUser: React.FC = () => {

    return (
        <div>
            <div className={styles.FormDivReg}>
                <h1 className={styles.FormTitle}>Регистрация</h1>
                <HeaderForm formContent="У вас уже есть аккаунт?"
                            linkTo="/login"
                            linkTitle="Войти"
                            wrapperLink="styles.FormDivWrapLink"/>
                <FormVersionTwo></FormVersionTwo>
            </div>
            <LinksConditionsPolicy/>
        </div>
    )
}

export default FormRegistUser;