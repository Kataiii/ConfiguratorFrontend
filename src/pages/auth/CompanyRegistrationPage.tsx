import { useContext } from "react";
import { Context } from "../..";
import DefaultModal from "../../shared/ui/Modals/DefaultModal";
import { useNavigate } from "react-router-dom";
import FormRegistCompany from "../../widgets/forms/FormRegistCompany";


const CompanyRegistPage: React.FC = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);

    return(
        <div>
            <FormRegistCompany/>
            {
                store.isFailAuth
                ? <DefaultModal title="Ошибка регистрации"
                                    message="Такой пользователь уже существует. Попробуйте войти в свой аккаунт"
                                    titleBtn="Войти в аккаунт"
                                    actionBtn={() => {
                                        store.setFailAuth(false);
                                        navigate('/login')
                                    }}/>
                : null
            }
        </div>
    );
}

export default CompanyRegistPage;