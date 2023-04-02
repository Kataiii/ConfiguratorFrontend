import { useState } from "react";
import styles from "./css/InputForm.module.css"
import ErrorForm from "./ErrorForm";
import { ValidationHelper, INVALID_REP_PASSWORD_MESSAGE } from "../../common/ValidationHelper";
import { IFormRegUser } from "../../../widgets/FormRegistUser"; 



export interface PasFormProps{
    type : string,
    placeholder : string,
    inputMain : string,
    state : IFormRegUser,
    setState : React.Dispatch<React.SetStateAction<IFormRegUser>>
}

const InputRepPassword = (props : PasFormProps) => {
    const [inputValue, stateInputValue] = useState(
        {
            value : '',
            errorPas : false
        }
    );

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setState({
            ...props.state, reppassword : e.target.value
        })
        console.log("props",props.state)
        console.log('e', e.target.value)
    }

    const onFocus = () => {
        validate(false);
    }

    const onBlur = () => {
        if(ValidationHelper.repPasswordValidate(props.inputMain, inputValue.value) != true){
            validate(true);
        }
        props.setState({
            ...props.state, reppassword:inputValue.value
        })
    }

    const validate = (value:boolean) => {
        stateInputValue({
            ...inputValue, errorPas: value
        });
    }

    const style = inputValue.errorPas ? styles.FormInputEr : styles.FormInput;

    return(
        <div className={styles.FormDivWrapError}>
            <input className={style} 
                type={props.type}
                placeholder={props.placeholder}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChangeHandler}/>
            {
                inputValue.errorPas == true
                    ?
                        <ErrorForm errorcontent={INVALID_REP_PASSWORD_MESSAGE}></ErrorForm>
                    :
                    null
            }
        </div>
    )
}

export default InputRepPassword;