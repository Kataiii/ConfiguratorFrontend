import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const LinkLanding = () => {
    return(
        <div className="linkLanding" id="linkMainPage">
            <Link to={'/'}>
                <img src={Logo} alt="img"></img>
            </Link>
        </div>
    );
}

export default LinkLanding;