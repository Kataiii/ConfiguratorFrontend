import InputForm from "./InputForm";
import ErrorForm from "./ErrorForm";
import styles from "./css/InputForm.module.css"
import { IFormLogin } from "../../../widgets/FormLogin";
import HelperForm from "./HelperForm";
import { useState } from "react";

//TODO обработку ошибки (скорее всего в самой форме регистрации), нормальную верстку - написано на листе, 
//      валидацию полную - объект отправляется только при не красных полях

//Made возникновение подсказки при наведении мыши, если она есть
//      убирание ошибки при фокусе на поле 

interface IWrapInputFormProps{
    type : string,
    placeholderInput : string,
    hasHelper : boolean,
    onFocus : {() : void} | undefined
    contentHelper : string | null,
    onBlur : {() : void} | undefined,
    error : string,
    //onChange : () => void | null
    onChange : {(e: React.ChangeEvent<HTMLInputElement>) : void} | undefined,
    //state : IFormLogin,
}

const WrapInputForm = (props : IWrapInputFormProps) => {
    const [helperState, setHelperState] = useState({
        isVisibleHelper : false,
        isVisibleError : false
    })

    const onMouseEnterHandler  = () => {
        if(props.hasHelper == true){
            setHelperState({
                ...helperState, isVisibleHelper : true
            })
        }
    }

    const onMouseLeaveHandler  = () => {
        if(props.hasHelper == true){
            setHelperState({
                ...helperState, isVisibleHelper : false
            })
        }
    }

    const onFocusHandler = () => {
        if(helperState.isVisibleError){
            setHelperState({
                ...helperState, isVisibleError : false
            })
        }
    }

    return (
        <div className={styles.FormDivWrapError}>
            <InputForm type={props.type} 
                        placeholder={props.placeholderInput} 
                        onBlur={props.onBlur}
                        //onFocus={props.onFocus}
                        onFocus={onFocusHandler}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                        onChange={props.onChange}></InputForm>
            {
                helperState.isVisibleError == true
                    ?
                        <ErrorForm errorcontent={props.error}></ErrorForm>
                    :
                    null
            }
            {
                props.hasHelper == true
                    ?
                        helperState.isVisibleHelper == true
                        ?
                        <HelperForm content={props.contentHelper}/>
                        :
                        null
                    :
                    null
            }
        </div>
    )
}

export default WrapInputForm;