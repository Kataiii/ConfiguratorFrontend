import FileUploader from "../shared/ui/ProfilePart/FileUploader";
import FormProfilePart from "../shared/ui/ProfilePart/FormProfilePart";
import LocationPart from "../shared/ui/ProfilePart/LocationPart";
import Notifications from "../shared/ui/ProfilePart/Notifications";
import styles from './css/FormProfile.module.css';

const FormProfile = () => {
    return(
        <div className={styles.MainWrap}>
            <div className={styles.Wrap}>
                <FileUploader/>
                <LocationPart/>
                <Notifications/>
            </div>
            <FormProfilePart is_checked={true}/>
        </div>
    )
}

export default FormProfile;