import LinkLanding from "./LinkLanding";
import styles from "../../app/App.module.css"


const RegisterHeader = () => {
    const className : string = styles.Header;

    return(
        <div className={className}>
            <LinkLanding></LinkLanding>
        </div>
    );
}

export default RegisterHeader;