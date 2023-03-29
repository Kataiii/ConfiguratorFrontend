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
    contentHelper : string | null,
    onBlur : {(value : string) : string | boolean} | undefined,
    error : string,
    //onChange : () => void | null
    onChange : {(e: React.ChangeEvent<HTMLInputElement> | string) : void} | undefined,
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
                isVisibleHelper : true,
                isVisibleError : false
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

    const onBlurHandler = (value : string) => {
        if(props.onBlur != undefined){
            let result : string | boolean = props.onBlur(value);
            if(typeof result === "string"){
                setHelperState({
                    ...helperState, isVisibleError : true
                })
            }
        }
    }

    return (
        <div className={styles.FormDivWrapError}>
            {/*{
                helperState.isVisibleError == true
                ?

                :
            }*/}
            <InputForm type={props.type} 
                        placeholder={props.placeholderInput} 
                        onBlur={onBlurHandler}
                        onFocus={onFocusHandler}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                        onChange={props.onChange}
                        errorVis={helperState.isVisibleError}/>
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