import { HeaderForm } from "../shared/ui/FormPart/HeaderForm";
import LinksConditionsPolicy from "../shared/ui/FormPart/LinksConditionsPolicy";
import FormCompany from "../shared/ui/FormPart/FormCompany";
import styles from "./css/Form.module.css"


const FormRegistCompany = () => {
    return (
        <div>
            <div className={styles.FormDivRegCom}>
                <h1 className={styles.FormTitle}>Регистрация</h1>
                <HeaderForm formContent="У вас уже есть аккаунт?"
                    linkTo="/login"
                    linkTitle="Войти" 
                    wrapperLink="styles.FormDivWrapLinkCompany"/>
                <FormCompany/>
            </div>
            <LinksConditionsPolicy/>
        </div>
    )
}

export default FormRegistCompany;