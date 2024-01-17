import { useContext } from "react";
import { Context } from "../..";
import FormRegistUser from "../../widgets/FormRegistUser";
import { useNavigate } from "react-router-dom";
import DefaultModal from "../../shared/ui/Modals/DefaultModal";

const UserRegistPage: React.FC = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    return(
        <div>
            <FormRegistUser/>
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

export default UserRegistPage;