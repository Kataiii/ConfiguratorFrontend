import React from "react";
import styles from "./css/Input.module.css";

interface InputProps{
    placeholder: string;
    onKeyDown: any;
    onChange: any;
}

const Input: React.FC<InputProps> = ({placeholder, onKeyDown, onChange}) => {
    return(
        <input autoFocus className={styles.input} placeholder={placeholder} type={'text'} onKeyDown={onKeyDown} onChange={onChange}/>
    )
}

export default Input;