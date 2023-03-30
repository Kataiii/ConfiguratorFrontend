import styles from "./css/InputForm.module.css"
import { useState } from "react";
import { IFormRegUser } from "../../../widgets/FormRegistUser"; 

export interface InputFormProps{
    type : string,
    placeholder : string,
    onBlur : {(value : string) : void} | undefined,
    onFocus : {() : void} | undefined,
    onMouseEnter : {() : void} | undefined,
    onMouseLeave : {() : void} | undefined,
    errorVis : boolean,
    state : IFormRegUser,
    setState : React.Dispatch<React.SetStateAction<IFormRegUser>>,
    name : string
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
        setLoginFields();
    }

    const setLoginFields = () =>{
        if(props.name == "name"){
            props.setState({
                ...props.state, name : inputValue.value
            })
        }
        if(props.name == "email"){
            props.setState({
                ...props.state, email : inputValue.value
            })
        }
        if(props.name == "password"){
            props.setState({
                ...props.state, password : inputValue.value
            })
        }
    }

    const style = props.errorVis ? styles.FormInputEr : styles.FormInput;

    return(
        <input className={style} 
                type={props.type}
                placeholder={props.placeholder}
                onBlur={() => {if(props.onBlur != undefined)props.onBlur(inputValue.value); setLoginFields()}}
                onFocus={props.onFocus}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onChange={onChangeHandler}
                name={props.name}/>
    );
}

export default InputForm;