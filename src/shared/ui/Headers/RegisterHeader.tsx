import LinkLanding from "../LinkLanding";
import styles from "./styles/Header.module.css"


const RegisterHeader = () => {
    return(
        <header className={styles.RegHeader}>
            <LinkLanding></LinkLanding>
        </header>
    );
}

export default RegisterHeader;