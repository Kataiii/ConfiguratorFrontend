import styles from "../../app/App.module.css"
import { Outlet } from "react-router-dom";
import AuthorisedHeader from "../../shared/ui/Headers/AuthorisedHeader";


const Chat: React.FC = () => {
    return(
        <div className={styles.App}>
            <AuthorisedHeader/>
            <div style={{marginTop:'100px'}}>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Chat;