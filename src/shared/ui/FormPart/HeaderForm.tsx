import { Link } from "react-router-dom"
import styles from "../../../widgets/css/Form.module.css"

interface IHeaderFormProps{
    formContent : string,
    linkTo : string,
    linkTitle : string,
    wrapperLink : string
}

export const HeaderForm = (props : IHeaderFormProps) => {
    const className = props.wrapperLink == 'FormDivWrapLink' ? styles.FormDivWrapLink : styles.FormDivWrapLinkCompany;

    return(
        <div className={className}>
          <p className={styles.FormContent}>{props.formContent}</p>
          <Link to={props.linkTo} className={styles.FormLinkWrap}>
            <p className={styles.FormLink}>{props.linkTitle}</p>
          </Link>
      </div>
    )
}