import styles from "./css/InputForm.module.css"

export interface InputFormProps{
    type : string,
    placeholder : string,
    onBlur : {() : void} | undefined,
    onFocus : {() : void} | undefined,
    onMouseEnter : {() : void} | undefined,
    onMouseLeave : {() : void} | undefined,
    onChange : {(e: React.ChangeEvent<HTMLInputElement>) : void} | undefined
}

const InputForm = (props : InputFormProps) => {
    return(
        <input className={styles.FormInput} 
                type={props.type}
                placeholder={props.placeholder}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onChange={props.onChange}/>
    );
}

export default InputForm;