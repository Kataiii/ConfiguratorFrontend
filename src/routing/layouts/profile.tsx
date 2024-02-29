import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/Headers/AuthorisedHeader";
import { Outlet } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css";
import SidePanelProfile from "../../widgets/SidePanelProfile";


const Root: React.FC = () => {
    return(
        <div className={styles.AppDev}>
            <AuthorisedHeader></AuthorisedHeader>
            <div className={stylesSidePanel.MainDiv}>
                <div className={stylesSidePanel.DivsWrap}>
                    <SidePanelProfile/>
                    <div className={stylesSidePanel.DivWrapPageContent}>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Root;