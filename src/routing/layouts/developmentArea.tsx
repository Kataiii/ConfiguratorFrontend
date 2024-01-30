import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/Headers/AuthorisedHeader";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css";
import { Link } from "react-router-dom";
import BreadApp from "../../shared/ui/Breadcrumb";
import MyMenu from "../../shared/ui/MyMenu";
import { useContext, useState } from "react";
import { useEffect } from "react";
import SearchInput from "../../shared/ui/SearchInput";
import SidePanel from "../../widgets/SidePanel";
import { Context } from "../..";
import LoadingPage from "../../pages/LoadingPage";

const Root: React.FC = () => {
    const {store, folderStore} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [stateFolder, setStateFolder] = useState(
        {
            title: <Link to="/home">{">"} Все проекты</Link>,
            key: "all_projects"
        }
    )

    useEffect(() => {
        const response = folderStore.getFoldersProjectByBack(store.getActiveRole()?.id || 4);
        response.then(response => {
            folderStore.setFoldersProject(response);
            setIsLoading(false);
        });
    }, [])

    useEffect(() => {
        if(location.pathname == "/home") navigate("/home/projects");

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

      //TODO изменить папки
      //TODO вынести создание папок в отдельный компонент
    return(
        isLoading
        ? <LoadingPage/>
        :   <div className={styles.AppDev}>
                <AuthorisedHeader></AuthorisedHeader>
                <div className={stylesSidePanel.MainDiv}>
                    <div className={stylesSidePanel.DivsWrap}>
                        <SidePanel/>
                        <div className={stylesSidePanel.DivWrapPageContent}>
                            <div>
                                <div className={stylesSidePanel.breadCrumpWrap}>
                                    {/* <BreadApp title={stateFolder}/> */}
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

export default Root;