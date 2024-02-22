import { Link } from "react-router-dom";
import stylesSidePanel from "../routing/layouts/css/DevelopmentArea.module.css";
import { IFolderProject } from "../entities/Folder/FolderProject";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import SidePanelItem from "../shared/ui/SidePanelItem";
import { Context } from "..";
import { FilterFolders } from "../shared/common/FilterFolders";
import MenuFolders from "../features/MenuFolders";


const SidePanel: React.FC = observer(() => {
    const { store, folderStore } = useContext(Context);
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
                    to={'/home'} onClick={() => {
                        folderStore.setActiveFolder(null);
                        localStorage.setItem("activeFolderId", "null");
                    }}>Все проекты</Link>
                <SidePanelItem style={'LinkFolder'} folder={folderStore.getFoldersProject().find(item => item.name == "Неотсортированные") ?? folderStore.getFoldersProject()[0]} />
                <MenuFolders folders={itemsMenuProject} typeFolders={"projects"} title={"Папки"} />

                <SidePanelItem folder={folderForRole || folderStore.getFoldersProject()[0]} />
                <SidePanelItem folder={folderStore.getFoldersProject().find(item => item.name == "Архив") ?? folderStore.getFoldersProject()[0]} />
                <SidePanelItem folder={folderStore.getFoldersProject().find(item => item.name == "Корзина") ?? folderStore.getFoldersProject()[0]} />
            </div>
        </div>
    );
})

export default SidePanel;