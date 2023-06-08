import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import { Outlet, useLocation } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css";
import { Link } from "react-router-dom";
import BreadApp from "../../shared/ui/Breadcrumb";
import MyMenu from "../../shared/ui/MyMenu";
import { useState } from "react";
import { useEffect } from "react";
import SearchInput from "../../shared/ui/SearchInput";

export default function Root(){
    const [stateFolder, setStateFolder] = useState(
        {
            title: <Link to="/home">{">"} Все проекты</Link>,
            key: "all_projects"
        }
    )
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.indexOf('/home/renders') == 0){
            setStateFolder({
                title: <Link to="/home/renders">{">"} Все рендеры</Link>,
                key: 'all_renders'
            })
        }
        else{
            setStateFolder({
                title: <Link to="/home">{">"} Все проекты</Link>,
                key: "all_projects"
            })
        }
      }, [location.pathname]);

    return(
        <div className={styles.AppDev}>
            <AuthorisedHeader></AuthorisedHeader>
            <div className={stylesSidePanel.MainDiv}>
                <div className={stylesSidePanel.DivsWrap}>
                    <div className={stylesSidePanel.SidePanelWrap}>
                        <div className={stylesSidePanel.SidePanel}>
                            <Link className={stylesSidePanel.LinkPersonal} 
                                    to={'/home'}>Все проекты</Link>
                            <Link className={styles.LinkFolder} to={'/home/projects/folders/unsorted'}>Неотсортированные</Link>
                            <MyMenu titleMy="Папки" typeFolders="projects"/>
                            <Link className={stylesSidePanel.LinkPersonal} 
                                    to={'/home/renders'}>Все рендеры</Link>
                            <Link className={styles.LinkFolder} to={'/home/renders/folders/unsorted'}>Неотсортированные</Link>
                            <MyMenu titleMy="Папки" typeFolders="renders"/>
                            <Link className={stylesSidePanel.LinkPersonal} 
                                    to={'/home/projects/folders/incoming'}>Входящие</Link>
                            <Link className={stylesSidePanel.LinkPersonal} 
                                    to={'/home/projects/folders/sent'}>Отправленные</Link>
                            <Link className={stylesSidePanel.LinkPersonal} 
                                    to={'/home/projects/folders/archive'}>Архив</Link>
                            <Link className={stylesSidePanel.LinkPersonal} 
                                    to={'/home/projects/folders/basket'}>Корзина</Link>
                        </div>
                    </div>
                    <div className={stylesSidePanel.DivWrapPageContent}>
                        <div>
                            <div>
                                <BreadApp title={stateFolder}/>
                            </div>
                            <div>
                                <div className={stylesSidePanel.SearchInputWrap}>
                                    <SearchInput/>
                                </div>
                            </div>
                            
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}