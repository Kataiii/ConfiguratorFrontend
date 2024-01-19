import { Nullable } from "../../../entities/Enums/Nullable";
import styles from "./css/InputForm.module.css"

interface HelperFormProps{
    content: Nullable<string>;
}

const HelperForm: React.FC<HelperFormProps> = ({ content }) => {
    return (
        <div className={styles.FormErrorWrap}>
            <div className={styles.FormError}>
                {
                    content == null
                        ?
                        null
                        :
                        <p dangerouslySetInnerHTML={{ __html: content }} className={styles.FormErrorContent}></p>
                }
            </div>
        </div>
    )
}

export default HelperForm;