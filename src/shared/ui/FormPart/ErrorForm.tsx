import Error from '../../../assets/icons/icon-error.svg'
import styles from './css/InputForm.module.css'


interface ErrorFormProps{
    errorcontent : string
}

const ErrorForm: React.FC<ErrorFormProps> = ({errorcontent}) => {
    return(
        <div className={styles.FormErrorWrap}>
            <div className={styles.FormError}>
                <img className={styles.FormErrorImg} src={Error} alt="icon-error"/>
                <p dangerouslySetInnerHTML={{ __html: errorcontent }} className={styles.FormErrorContent}></p>
            </div>
        </div>
    )
}

export default ErrorForm;