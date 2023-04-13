import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import { Outlet } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css"
import { Link } from "react-router-dom";
import BreadApp from "../../shared/ui/Breadcrumb";
import MyMenu from "../../shared/ui/MyMenu";
import { useState } from "react";

export default function Root(){
    const [stateFolder, setStateFolder] = useState(
        {
            title: <Link to="/home">{">"} Все проекты</Link>,
            key: "all_projects"
        }
    )

    return(
        <div className={styles.AppDev}>
            <AuthorisedHeader></AuthorisedHeader>
            <div className={stylesSidePanel.MainDiv}>
                <div className={stylesSidePanel.DivsWrap}>
                    <div className={stylesSidePanel.SidePanelWrap}>
                        <div className={stylesSidePanel.SidePanel}>
                            <Link className={stylesSidePanel.LinkPersonal} to={'/home'}>Все проекты</Link>
                            <Link className={styles.LinkFolder} to={'/home/projects/folders/unsorted'}>Неотсортированные</Link>
                            <MyMenu titleMy="Папки"/>
                        </div>
                    </div>
                    <div className={stylesSidePanel.DivWrapPageContent}>
                        <div>
                            <div>
                                <BreadApp title={stateFolder}/>
                            </div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}