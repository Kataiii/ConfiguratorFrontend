import styles from "./css/InputForm.module.css"

interface CheckboxFormProps {
    content: string
}

const CheckboxForm: React.FC<CheckboxFormProps> = ({content}) => {

    return (
        <div>
            <p className={styles.CheckboxContent} dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    )
}

export default CheckboxForm;