import { Link } from "react-router-dom";
import stylesSidePanel from "../routing/layouts/css/DevelopmentArea.module.css";
import styles from "../app/App.module.css";
import { IFolderProject } from "../entities/Folder/FolderProject";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import SidePanelItem from "../shared/ui/SidePanelItem";
import { Context } from "..";
import { FilterFolders } from "../shared/common/FilterFolders";

interface SidePanelProps {
        foldersProject: IFolderProject[];
}

const SidePanel: React.FC<SidePanelProps> = observer(({ foldersProject }) => {
        const {store} = useContext(Context);
        const [itemsMenuProject, setItemsMenuProject] = useState<IFolderProject[]>([]);
        const folderForRole = store.getActiveRole()?.name == 'user' 
                ? foldersProject.find(item => item.name == "Отправленные")
                : foldersProject.find(item => item.name == "На просчете");

        useEffect(() => {
                const folders = store.getActiveRole()?.name == "user" 
                        ? FilterFolders.filterUserFolders(foldersProject)
                        : FilterFolders.filterCompanyFolders(foldersProject);
                setItemsMenuProject(folders);
        }, [])

        return (
                <div className={stylesSidePanel.SidePanelWrap}>
                        <div className={stylesSidePanel.SidePanel}>
                                <Link className={stylesSidePanel.LinkPersonal}
                                        to={'/home'}>Все проекты</Link>
                                <SidePanelItem style={'LinkFolder'} folder={foldersProject.find(item => item.name == "Неотсортированные") || foldersProject[0]}/>
                                {/* <MyMenu titleMy="Папки" typeFolders="projects"/> */}
                                <Link className={stylesSidePanel.LinkPersonal}
                                        to={'/home/renders'}>Все рендеры</Link>

                                {/* !!!!!!! */}
                                {/* TODO заменить на SidePanel с новым entity */}
                                <Link className={styles.LinkFolder} to={'/home/renders/folders/unsorted'}>Неотсортированные</Link>

                                {/* <MyMenu titleMy="Папки" typeFolders="renders"/> */}
                                <SidePanelItem folder={folderForRole || foldersProject[0]}/>
                                <SidePanelItem folder={foldersProject.find(item => item.name == "Корзина") || foldersProject[0]}/>
                                <SidePanelItem folder={foldersProject.find(item => item.name == "Архив") || foldersProject[0]}/>
                        </div>
                </div>
        );
})

export default SidePanel;