import TitlePart from "../../shared/ui/ProfilePart/TitlePart";
import FormProfile from "../../widgets/FormProfile";
import styles from './css/Profile.module.css';

const UserProfile = () => {
    return(
        <div className={styles.Wrap}>
            {/* TODO разделение по ролям */}
            <TitlePart login="Логин" cityName="Саратов" created={new Date()} endingLicence={new Date()}/>
            <FormProfile/>
        </div>
    )
}

export default UserProfile;