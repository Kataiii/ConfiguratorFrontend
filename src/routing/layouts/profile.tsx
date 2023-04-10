import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import { Outlet } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css"
import { Link } from "react-router-dom";


export default function Root(){
    return(
        <div className={styles.AppDev}>
            <AuthorisedHeader></AuthorisedHeader>
            <div className={stylesSidePanel.MainDiv}>
                <div className={stylesSidePanel.SidePanelWrap}>
                    <div>
                        <Link to={'/home/profile'}>Персональные данные</Link>
                        <Link to={'/home/profile/licence'}>Подписка</Link>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}