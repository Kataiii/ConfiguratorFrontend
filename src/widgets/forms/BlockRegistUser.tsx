import styles from "../css/Form.module.css"
import { Link } from "react-router-dom";
import LinksConditionsPolicy from "../../shared/ui/FormPart/LinksConditionsPolicy";
import { HeaderForm } from "../../shared/ui/FormPart/HeaderForm";
import FormRegistUser from "../../shared/ui/FormPart/FormRegistUser";


const BlockRegistUser: React.FC = () => {

    return (
        <div>
            <div className={styles.FormDivReg}>
                <h1 className={styles.FormTitle}>Регистрация</h1>
                <HeaderForm formContent="У вас уже есть аккаунт?"
                            linkTo="/login"
                            linkTitle="Войти"
                            wrapperLink="styles.FormDivWrapLink"/>
                <FormRegistUser/>
            </div>
            <LinksConditionsPolicy/>
        </div>
    )
}

export default BlockRegistUser;