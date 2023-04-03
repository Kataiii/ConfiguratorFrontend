import styles from "../app/App.module.css"


const WEBPATHDOCUMENT = 'http://127.0.0.1:9000/'

const PDFPage = (props : {name : string}) => {
    return(
        <div>
            <iframe src={WEBPATHDOCUMENT + props.name} className={styles.IFrameDiv}></iframe>
        </div>
    )
}

export default PDFPage;