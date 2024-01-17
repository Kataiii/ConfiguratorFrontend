import styles from "../app/App.module.css"


const WEBPATHDOCUMENT = 'http://127.0.0.1:9000/'

export interface PDFPageProps{
    name: string;
}

const PDFPage: React.FC<PDFPageProps> = ({name}) => {
    return(
        <div>
            <iframe src={WEBPATHDOCUMENT + name} className={styles.IFrameDiv}></iframe>
        </div>
    )
}

export default PDFPage;