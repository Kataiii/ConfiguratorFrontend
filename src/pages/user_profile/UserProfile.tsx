import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { ICompany } from "../../entities/User/Company";
import { IEmployee } from "../../entities/User/Employee";
import { IUser } from "../../entities/User/User";
import CityService from "../../store/services/CityService";
import TitlePart from "../../shared/ui/ProfilePart/TitlePart";
import FormProfile from "../../widgets/forms/FormProfile";
import styles from './css/Profile.module.css';

const UserProfile: React.FC = observer(() => {
    const {store, activeUser} = useContext(Context);
    const [login, setLoginState] = useState('');
    const [city, setCityState] = useState('');

    useEffect(() => {
        onChangeLogin();
        onChangeCity();
    }, []);

    const onChangeLogin = () => {
        let user: ICompany | IUser | IEmployee;
        switch(activeUser.activeRole.name){
            case 'company':
                user = activeUser.user as ICompany;
                setLoginState(user.company_name);
                break;
            case 'user':
                user = activeUser.user as IUser;
                setLoginState(user.login);
                break;
            case 'company_user':
                user = activeUser.user as IEmployee;
                setLoginState(user.login);
                break;
        }
    }

    const onChangeCity = async () => {
        if(store.getAccount().city_id == null){
            //TODO определение местоположения
        }
        else{
            const city = await CityService.getCityById(store.getAccount().city_id);
            setCityState(city.data.name);
        }
    }

    return(
        <div className={styles.Wrap}>
            {/* TODO разделение по ролям */}
            <TitlePart login={login} 
                        cityName={city === '' ? undefined : city} 
                        created={new Date(store.getAccount().createdAt)} 
                        endingLicence={new Date(store.getAccount().createdAt)}/>
            <FormProfile/>
        </div>
    )
})

export default UserProfile;