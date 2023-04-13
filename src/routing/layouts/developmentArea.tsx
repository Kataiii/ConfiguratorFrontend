import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import { Outlet } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css"
import { Link } from "react-router-dom";
import App from "../../shared/ui/Menu";
import BreadApp from "../../shared/ui/Breadcrumb";
import MyMenu from "../../shared/ui/MyMenu";

export default function Root(){
    const title = {
        title: <Link to="/home">{">"} Все проекты</Link>,
        key: "all_projects"
    }

    return(
        <div className={styles.AppDev}>
            <AuthorisedHeader></AuthorisedHeader>
            <div className={stylesSidePanel.MainDiv}>
                <div className={stylesSidePanel.DivsWrap}>
                    <div className={stylesSidePanel.SidePanelWrap}>
                        <div className={stylesSidePanel.SidePanel}>
                            <Link className={stylesSidePanel.LinkPersonal} to={'/home'}>Все проекты</Link>
                            {/* <App/> */}
                            <MyMenu titleMy="Папки"/>
                        </div>
                    </div>
                    <div className={stylesSidePanel.DivWrapPageContent}>
                        <div>
                            <div>
                                <BreadApp title={title}/>
                            </div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}