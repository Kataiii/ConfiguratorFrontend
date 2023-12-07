import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import FileUploader from "../shared/ui/ProfilePart/FileUploader";
import FormProfilePart from "../shared/ui/ProfilePart/FormProfilePart";
import LocationPart from "../shared/ui/ProfilePart/LocationPart";
import Notifications from "../shared/ui/ProfilePart/Notifications";
import styles from './css/FormProfile.module.css';

const FormProfile = observer(() => {
    const {store, activeUser} = useContext(Context);
    const [about, setAboutState] = useState<string | null>(null);

    useEffect(() => {

    }, []);

    //TODO написать функцию для получения из бд about me

    return(
        <div className={styles.MainWrap}>
            <div className={styles.Wrap}>
                <FileUploader/>
                <LocationPart/>
                <Notifications/>
            </div>
            <FormProfilePart surname={activeUser.user.surname}
                            name={activeUser.user.name}
                            pathronomyc={activeUser.user.pathronomyc}
                            email={store.acount.email} 
                            is_checked={store.acount.is_checked_email}
                            phone_number={activeUser.user.phone_number}
                            about_me={about}
                            city_id={store.acount.city_id}/>
        </div>
    )
})

export default FormProfile;