import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/Headers/AuthorisedHeader";
import { Outlet } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



const Root: React.FC = () => {
    const location = useLocation();
    const [styleState, setStyleState] = useState({
        styleLinkProfile : stylesSidePanel.LinkPersonalActive,
        styleLinkLicence : stylesSidePanel.LinkPersonal
    });

    useEffect(() => {
        '/home/profile' == location.pathname 
            ? 
                setStyleState({styleLinkProfile : stylesSidePanel.LinkPersonalActive, styleLinkLicence : stylesSidePanel.LinkPersonal}) 
            : 
                setStyleState({styleLinkProfile : stylesSidePanel.LinkPersonal, styleLinkLicence : stylesSidePanel.LinkPersonalActive});
    }, [location])

    //TODO вынести панель в отдельный элемент
    return(
        <div className={styles.AppDev}>
            <AuthorisedHeader></AuthorisedHeader>
            <div className={stylesSidePanel.MainDiv}>
                <div className={stylesSidePanel.DivsWrap}>
                    <div className={stylesSidePanel.SidePanelWrap}>
                        <div className={stylesSidePanel.SidePanel}>
                            <Link className={styleState.styleLinkProfile}  to={'/home/profile'}>Персональные данные</Link>
                            <Link className={styleState.styleLinkLicence}  to={'/home/profile/licence'}>Подписка</Link>
                        </div>
                    </div>
                    <div className={stylesSidePanel.DivWrapPageContent}>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Root;