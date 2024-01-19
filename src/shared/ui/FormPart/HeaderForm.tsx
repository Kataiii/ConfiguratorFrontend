import { Link } from "react-router-dom"
import styles from "../../../widgets/css/Form.module.css"

interface HeaderFormProps{
    formContent : string,
    linkTo : string,
    linkTitle : string,
    wrapperLink : string
}

export const HeaderForm: React.FC<HeaderFormProps> = ({formContent, linkTo, linkTitle, wrapperLink}) => {
    const className = wrapperLink == 'FormDivWrapLink' ? styles.FormDivWrapLink : styles.FormDivWrapLinkCompany;

    return(
        <div className={className}>
          <p className={styles.FormContent}>{formContent}</p>
          <Link to={linkTo} className={styles.FormLinkWrap}>
            <p className={styles.FormLink}>{linkTitle}</p>
          </Link>
      </div>
    )
}