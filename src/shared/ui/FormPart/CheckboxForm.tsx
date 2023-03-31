import styles from "./css/InputForm.module.css"
import ActiveChecbox from "../../../assets/icons/icon_checkbox-active.svg"
import NotActiveCheckbox from "../../../assets/icons/icon-checkbox-not-active.svg"
import { IFormRegUser } from "./FormVersionTwo";
import { useState } from "react";

interface ICheckboxFormProps {
    ischecked: boolean,
    content: string,
    state : IFormRegUser,
    setState : React.Dispatch<React.SetStateAction<IFormRegUser>>,
    name : string
}

const CheckboxForm = (props : ICheckboxFormProps) => {
    const [stateChecked, setStateChecked] = useState({
        check : props.ischecked
    })

    const onClickHandler = () => {
        setStateChecked({
            ...stateChecked, check : !stateChecked.check
        })
        if(props.name == "isCheckedMailing"){
            props.setState({
                ...props.state, isCheckedMailing : !props.state.isCheckedMailing
            })
        }

        if(props.name == "isCheckedUserAgreement"){
            props.setState({
                ...props.state, isCheckedUserAgreement : !props.state.isCheckedUserAgreement
            })
        }

    }

    return (
        <div className={styles.CheckboxDiv}>
            <div className={styles.CheckboxDivWrap}>
                {
                    props.ischecked
                    ?
                    <div className={styles.CheckBoxWrapImg}>
                        <img className={styles.CheckBoxImg} src={ActiveChecbox} alt="active-checkbox" onClick={onClickHandler}></img>
                    </div>
                    :
                    <div className={styles.CheckBoxWrapImg}>
                        <img className={styles.CheckBoxImg} src={NotActiveCheckbox} alt="not-active-checkbox" onClick={onClickHandler}></img>
                    </div>
                }
                <p className={styles.CheckboxContent} dangerouslySetInnerHTML={{ __html: props.content }}></p>
            </div>
        </div>
    )
}

export default CheckboxForm;