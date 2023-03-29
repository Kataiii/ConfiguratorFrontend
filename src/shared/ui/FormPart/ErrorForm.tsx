import Error from '../../../assets/icons/icon-error.svg'
import styles from './css/InputForm.module.css'


interface ErrorFormProps{
    errorcontent : string
}

const ErrorForm = (props : ErrorFormProps) => {
    return(
        <div className={styles.FormError}>
            <img className={styles.FormErrorImg} src={Error} alt="icon-error"/>
            <p dangerouslySetInnerHTML={{ __html: props.errorcontent }} className={styles.FormErrorContent}></p>
        </div>
    )
}

export default ErrorForm;