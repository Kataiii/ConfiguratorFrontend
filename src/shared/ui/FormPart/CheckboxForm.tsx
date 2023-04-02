import styles from "./css/InputForm.module.css"

interface ICheckboxFormProps {
    content: string
}

const CheckboxForm = (props: ICheckboxFormProps) => {

    return (
        <div>
            <p className={styles.CheckboxContent} dangerouslySetInnerHTML={{ __html: props.content }}></p>
        </div>
    )
}

export default CheckboxForm;