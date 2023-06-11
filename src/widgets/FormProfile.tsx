import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import FileUploader from "../shared/ui/ProfilePart/FileUploader";
import FormProfilePart from "../shared/ui/ProfilePart/FormProfilePart";
import LocationPart from "../shared/ui/ProfilePart/LocationPart";
import Notifications from "../shared/ui/ProfilePart/Notifications";
import styles from './css/FormProfile.module.css';

const FormProfile = observer(() => {
    const {store, activeUser} = useContext(Context);

    // useEffect(() => {
    //     console.log(store.acount);
    // }, [])

    return(
        <div className={styles.MainWrap}>
            <div className={styles.Wrap}>
                <FileUploader/>
                <LocationPart/>
                <Notifications/>
            </div>
            <FormProfilePart is_checked={store.acount.is_checked_email}/>
        </div>
    )
})

export default FormProfile;