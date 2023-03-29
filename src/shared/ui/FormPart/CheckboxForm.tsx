import styles from "./css/InputForm.module.css"


interface ICheckboxFormProps {
    ischecked: boolean,
    content: string
}

const CheckboxForm = (props : ICheckboxFormProps) => {
    return (
        <div className={styles.CheckboxDiv}>
            <input type="checkbox" name="newsletter" value="newsletter"/>
            <p className={styles.CheckboxContent} dangerouslySetInnerHTML={{ __html: props.content }}></p>
        </div>
    )
}

export default CheckboxForm;