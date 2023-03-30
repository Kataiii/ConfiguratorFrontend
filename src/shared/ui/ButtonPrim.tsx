import React from "react"
import styles from "../../app/App.module.css"

interface BtnProps{
    title : string,
    onClick : any,
    isDisabled : boolean
}


const Button : React.FC<BtnProps> = (props) => {

    return(
        props.isDisabled
        ?
        <button className={styles.BtnStyleDis} onClick={props.onClick} disabled>{props.title}</button>
        :
        <button className={styles.BtnStyle} onClick={props.onClick}>{props.title}</button>
    );
}

export default Button;