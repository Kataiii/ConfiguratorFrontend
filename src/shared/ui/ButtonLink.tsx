import styles from "./css/Button.module.css"


export interface ButtonLinkProps{
    img : any,
    imgAlt : string,
    content : string,
    action : () => void
}

const ButtonLink = (props : ButtonLinkProps) => {
    return(
        <div className={styles.BtnLinlWrap} onClick={props.action}>
            <img className={styles.BtnLinlImg} src={props.img} alt={props.imgAlt}/>
            <p className={styles.BtnLinlContent}>{props.content}</p>
        </div>
    )
}

export default ButtonLink;