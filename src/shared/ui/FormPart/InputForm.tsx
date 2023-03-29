import styles from "./css/InputForm.module.css"

export interface InputFormProps{
    type : string,
    placeholder : string,
    error : string,
    action : any
}

const InputForm = (props : InputFormProps) => {
    return(
        <input className={styles.FormInput} 
                type={props.type}
                placeholder={props.placeholder}
                onBlur={props.action}/>
    );
}

export default InputForm;