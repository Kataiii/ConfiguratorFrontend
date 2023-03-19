import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import styles from "../../app/App.module.css"


const LinkLanding = () => {
    const className : string = styles.LinkLanding;

    return(
        <div className={className} id="linkMainPage">
            <Link to={'/'}>
                <img src={Logo} alt="img-logo"></img>
            </Link>
        </div>
    );
}

export default LinkLanding;