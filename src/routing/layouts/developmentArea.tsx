import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/Headers/AuthorisedHeader";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import stylesSidePanel from "./css/DevelopmentArea.module.css";
import BreadApp, { BreadAppItem } from "../../shared/ui/Breadcrumb";
import { useContext, useState } from "react";
import { useEffect } from "react";
import SearchInput from "../../shared/ui/SearchInput";
import SidePanel from "../../widgets/SidePanel";
import { Context } from "../..";
import LoadingPage from "../../pages/LoadingPage";
import RoleService from "../../store/services/RoleService";
import { IRole } from "../../entities/Role";
import { SplitUrl } from "../../shared/common/SplitUrl";
import ProjectService from "../../store/services/ProjectService";
import { IProject } from "../../entities/Project";



const Root: React.FC = () => {
    const {store, folderStore, projectStore} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [items, setItems] = useState<BreadAppItem[]>(SplitUrl.splitUrl(location.pathname));

    useEffect(() => {
        if(store.getActiveRole() === null){
            let roleName = localStorage.getItem('role');
            if(roleName != null) {
                const response = RoleService.getRoleByName(roleName);
                response.then(response => {
                    store.setActiveRole({id: response.id, name: response.name} as IRole);
                });
            }
        }
        //TODO Если убрать ??, то скорее всего раотать не будет
        const response = folderStore.getFoldersProjectByBack(store.getActiveRole()?.id ?? 4);
        response.then(response => {
            folderStore.setFoldersProject(response);
            setIsLoading(false);
        });
        const responseProjects  = ProjectService.getAllProjectsPagination(store.getActiveRole()?.id ?? 4, 1, 15);
        responseProjects.then(response => {
            let projects: IProject[] = [];
            const user_id = store.getAccount().id;
            response.map(item => {
                projects.push({
                    id: item.id,
                    name: item.name,
                    id_user: user_id,
                    folder_id: item.folder_id,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                    preview: item.preview ?? undefined,
                    save_file: item.save_file ?? undefined
                });
            })
            projectStore.setProjects(projects);
        })
    }, []);

    useEffect(() => {
        if(location.pathname == "/home") navigate("/home/projects");
        if(location.pathname == "/home/projects" || location.pathname == "/home/renders") folderStore.setActiveFolder(null);
        setItems(SplitUrl.splitUrl(location.pathname));
    }, [location.pathname]);

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
                                    <BreadApp items={items}/>
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