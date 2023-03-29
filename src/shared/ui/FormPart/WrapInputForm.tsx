import InputForm from "./InputForm";
import ErrorForm from "./ErrorForm";
import styles from "./css/InputForm.module.css"
import { IFormLogin } from "../../../widgets/FormLogin";

interface IWrapInputFormProps{
    action : (e: React.ChangeEvent<HTMLInputElement>) => void,
    state : IFormLogin,
    placeholderInput : string,
    error : string,
    type : string
}

const WrapInputForm = (props : IWrapInputFormProps) => {
    return (
        <div className={styles.FormDivWrapError}>
            <InputForm type={props.type} placeholder={props.placeholderInput} error={props.error} action={props.action}></InputForm>
            {
                props.state.failAuth == true
                    ?
                    <ErrorForm errorcontent={props.error}></ErrorForm>
                    :
                    null
            }
        </div>
    )
}

export default WrapInputForm;