import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/Headers/AuthorisedHeader";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
import { useFetching } from "../../shared/hooks/UseFetching";


const Root: React.FC = () => {
    const { store, folderStore } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const [fetchActiveRole, isRoleLoading, roleError] = useFetching(async() => {
        if (store.getActiveRole() === null) {
            let roleName = localStorage.getItem('role');
            if (roleName != null) {
                const response = await RoleService.getRoleByName(roleName);
                store.setActiveRole({ id: response.id, name: response.name } as IRole);
            }
        }
    });
    const [fetchFolders, isFoldersLoading, foldersError] = useFetching(async() => {
        const response = await folderStore.getFoldersProjectByBack(store.getActiveRole()!.id);
        folderStore.setFoldersProject( response);
    });
    const [items, setItems] = useState<BreadAppItem[]>(SplitUrl.splitUrl(location.pathname));

    useEffect(() => {
        const response = fetchActiveRole();
        response.then( _ => {
            fetchFolders();
        })
    }, []);

    useEffect(() => {
        if (location.pathname == "/home") navigate("/home/projects");
        if (location.pathname == "/home/projects" || location.pathname == "/home/renders") folderStore.setActiveFolder(null);
        setItems(SplitUrl.splitUrl(location.pathname));
        //TODO точно ли это хорошо
    }, [location.pathname, folderStore.getFoldersProject()]);

    return (
        (isRoleLoading || isFoldersLoading)
            ? <LoadingPage />
            : <div className={styles.AppDev}>
                <AuthorisedHeader></AuthorisedHeader>
                <div className={stylesSidePanel.MainDiv}>
                    <div className={stylesSidePanel.DivsWrap}>
                        <SidePanel/>
                        <div className={stylesSidePanel.DivWrapPageContent}>
                            <div className={stylesSidePanel.breadCrumpWrap}>
                                <BreadApp items={items} />
                            </div>
                            <div className={stylesSidePanel.SearchInputWrap}>
                                <SearchInput />
                            </div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Root;