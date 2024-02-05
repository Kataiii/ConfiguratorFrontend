import { Link } from "react-router-dom";
import stylesSidePanel from "../routing/layouts/css/DevelopmentArea.module.css";
import styles from "../app/App.module.css";
import { IFolderProject } from "../entities/Folder/FolderProject";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import SidePanelItem from "../shared/ui/SidePanelItem";
import { Context } from "..";
import { FilterFolders } from "../shared/common/FilterFolders";
import MenuFolders from "../features/MenuFolders";


const SidePanel: React.FC = observer(( ) => {
        const {store, folderStore} = useContext(Context);
        const [itemsMenuProject, setItemsMenuProject] = useState<IFolderProject[]>([]);
        const folderForRole = store.getActiveRole()?.name == 'user' 
                ? folderStore.getFoldersProject().find(item => item.name == "Отправленные")
                : folderStore.getFoldersProject().find(item => item.name == "На просчете");

        useEffect(() => {
                const folders = store.getActiveRole()?.name == "user" 
                        ? FilterFolders.filterUserFolders(folderStore.getFoldersProject())
                        : FilterFolders.filterCompanyFolders(folderStore.getFoldersProject());
                setItemsMenuProject(folders);
        }, [folderStore.getFoldersProject(), folderStore.getFoldersProject().length]);

        return (
                <div className={stylesSidePanel.SidePanelWrap}>
                        <div id="SidePanel" className={stylesSidePanel.SidePanel}>
                                <Link className={stylesSidePanel.LinkPersonal}
                                        to={'/home'} onClick={() => folderStore.setActiveFolder(null)}>Все проекты</Link>
                                <SidePanelItem style={'LinkFolder'} folder={folderStore.getFoldersProject().find(item => item.name == "Неотсортированные") || folderStore.getFoldersProject()[0]}/>
                                <MenuFolders folders={itemsMenuProject} typeFolders={"projects"} title={"Папки"} />
                                <Link className={stylesSidePanel.LinkPersonal}
                                        to={'/home/renders'} onClick={() => folderStore.setActiveFolder(null)}>Все рендеры</Link>

                                {/* !!!!!!! */}
                                {/* TODO заменить на SidePanel с новым entity */}
                                <Link className={styles.LinkFolder} to={'/home/renders/folders/unsorted'}>Неотсортированные</Link>

                                {/* <MyMenu titleMy="Папки" typeFolders="renders"/> */}
                                <SidePanelItem folder={folderForRole || folderStore.getFoldersProject()[0]}/>
                                <SidePanelItem folder={folderStore.getFoldersProject().find(item => item.name == "Корзина") || folderStore.getFoldersProject()[0]}/>
                                <SidePanelItem folder={folderStore.getFoldersProject().find(item => item.name == "Архив") || folderStore.getFoldersProject()[0]}/>
                        </div>
                </div>
        );
})

export default SidePanel;