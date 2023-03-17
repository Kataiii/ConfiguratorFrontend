import React from "react"
import styles from "../../app/App.module.css"

interface BtnProps{
    title : string,
    onClick : any
}


const Button : React.FC<BtnProps> = (props) => {

    return(
        <button className={styles.BtnStyle} onClick={props.onClick}>{props.title}</button>
    );
}

export default Button;