import Error from '../../../assets/icons/icon-error.svg'


interface ErrorFormProps{
    errorcontent : string
}

const ErrorForm = (props : ErrorFormProps) => {
    return(
        <div>
            <img src={Error} alt="icon-error"/>
            <p>{props.errorcontent}</p>
        </div>
    )
}

export default ErrorForm;