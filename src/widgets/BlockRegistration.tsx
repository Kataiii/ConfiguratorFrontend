import PersonRegist from "../assets/images/image-person-regist.svg"
import CompanyRegist from "../assets/images/image-company-regist.svg"
import CardRegist, {cardRegistProps} from "../shared/ui/CardRegist";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const BlockRegistration = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Регистрация</h1>
            <CardRegist title="Пользовательская" image={PersonRegist} altImage="image-file" action={() => {navigate('/login/register/user')}}></CardRegist>
            <CardRegist title="Компания" image={CompanyRegist} altImage="image-document" action={() => {navigate('/login/register/company')}}></CardRegist>
            <div>
                <p>У вас уже есть аккаунт?</p>
                <Link to={'/login'}>
                    <p>Войти</p>
                </Link>
            </div>
        </div>
    );
}

export default BlockRegistration;