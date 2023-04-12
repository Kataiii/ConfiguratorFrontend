import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import { Outlet } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Root(){
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
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
}