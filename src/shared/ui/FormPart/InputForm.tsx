import styles from "./css/InputForm.module.css"
import { useState } from "react";

export interface InputFormProps{
    type : string,
    placeholder : string,
    onBlur : {(value : string) : void} | undefined,
    onFocus : {() : void} | undefined,
    onMouseEnter : {() : void} | undefined,
    onMouseLeave : {() : void} | undefined,
    onChange : {(e: React.ChangeEvent<HTMLInputElement> | string) : void} | undefined,
    errorVis : boolean
}

const InputForm = (props : InputFormProps) => {
    const [inputValue, stateInputValue] = useState(
        {
            value : ''
        }
    );

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        stateInputValue({
            ...inputValue, value: e.target.value
        });
        if(typeof e === "string" && props.onChange != undefined){
            props.onChange(e);
        }
    }

    const style = props.errorVis ? styles.FormInputEr : styles.FormInput;

    return(
        <input className={style} 
                type={props.type}
                placeholder={props.placeholder}
                onBlur={() => {if(props.onBlur != undefined)props.onBlur(inputValue.value);}}
                onFocus={props.onFocus}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onChange={onChangeHandler}/>
    );
}

export default InputForm;