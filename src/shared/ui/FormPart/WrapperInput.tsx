import ErrorForm from "./ErrorForm";

interface WrapperInputProps{
    classNameWrapError: string; //stylesInput.FormDivWrapError
    classNameInput: string; //style
    typeInput: string;
    placeholderInput: string;
    onFocus:  React.FocusEventHandler<HTMLInputElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    isFail: boolean;
    errorContent: string;
}

const WrapperInput: React.FC<WrapperInputProps> = ({classNameWrapError, classNameInput, typeInput, placeholderInput, onFocus, onChange, isFail,errorContent}) => {
    return (
        <div className={classNameWrapError}> 
            <input className={classNameInput}
                type={typeInput}
                placeholder={placeholderInput}
                onFocus={onFocus}
                onChange={onChange}/>
            {
                isFail
                    ?
                    <ErrorForm errorcontent={errorContent}/>
                    :
                    null
            }
        </div>
    );
}

export default WrapperInput;