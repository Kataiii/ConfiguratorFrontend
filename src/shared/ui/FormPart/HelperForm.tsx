import styles from "./css/InputForm.module.css"

const HelperForm = (props: { content: string | null }) => {
    return (
        <div className={styles.FormErrorWrap}>
            <div className={styles.FormError}>
                {
                    props.content == null
                        ?
                        null
                        :
                        <p dangerouslySetInnerHTML={{ __html: props.content }} className={styles.FormErrorContent}></p>
                }
            </div>
        </div>
    )
}

export default HelperForm;