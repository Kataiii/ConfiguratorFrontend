import FileUploader from "../../shared/ui/ProfilePart/FileUploader";
import TitlePart from "../../shared/ui/ProfilePart/TitlePart";

const UserProfile = () => {
    return(
        <div>
            {/* TODO разделение по ролям */}
            <TitlePart login="Логин" cityName="Саратов" created={new Date()} endingLicence={new Date()}/>
            <FileUploader/>
        </div>
    )
}

export default UserProfile;