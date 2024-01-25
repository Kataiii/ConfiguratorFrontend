import { useContext } from "react";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
import DefaultModal from "../../shared/ui/Modals/DefaultModal";
import BlockRegistUser from "../../widgets/forms/BlockRegistUser";

const UserRegistPage: React.FC = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    return(
        <div>
            <BlockRegistUser/>
            {
                store.getFailAuth()
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