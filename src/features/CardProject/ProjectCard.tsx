import styles from './ProjectCard.module.css';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProject } from '../../entities/Project';
import PopUpMenu, { PopUpMenuItem } from '../../shared/ui/DropDown/PopUpMenu';
import CardInfo from './CardInfo';
import { ColorText } from '../../entities/Enums/ColorTextPopUp';
import IconMenu from "../../assets/icons/icon-dropdown menu.svg";
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import ProjectService from '../../store/services/ProjectService';


interface ProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = observer(({ project }) => {
    const {folderStore, projectStore} = useContext(Context);
    const locate = useLocation();
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [name, setName] = useState<string>('');

    const items: PopUpMenuItem[] = useMemo<PopUpMenuItem[]>(() => [
        {
            content: 'Открыть',
            action: () => navigate(`/home/configurator/${folderStore.getFoldersProject().find(item => item.id === project.folder_id)!.name}/${project.name}`),
            color: ColorText.White
        },
        {
            content: 'Отправить на просчет',
            action: () => console.log('Отправить на просчет'),
            color: ColorText.White
        },
        {
            content: 'Переименовать',
            action: () => console.log('Переименовать'),
            color: ColorText.White
        },
        {
            content: 'Создать копию',
            action: () => console.log('Создать копию'),
            color: ColorText.White
        },
        {
            content: 'Переместить',
            action: () => console.log('Переместить'),
            color: ColorText.White
        },
        {
            content: 'Удалить',
            action: async () => {
                if(project.folder_id === folderStore.getFoldersProject().find(item => item.name === "Корзина")!.id){
                    await ProjectService.deleteProject(project.id);
                    projectStore.setProjects(projectStore.getProjects().filter(item => item.id != project.id));
                    return;
                }
                console.log('Проект не в корзине');
            },
            color: ColorText.Red
        }
    ], []);

    useEffect(() => {
        const folderName = folderStore.getFoldersProject().find(item => item.id === project.folder_id)!.name;
        setName(folderName);
    }, []);

    const clickHandler = () => {
        const folderName = folderStore.getFoldersProject().find(item => item.id === project.folder_id);
        navigate(`/home/configurator/${folderName}/${project.name}`);
    }

    const closeHandler = (e: any) => {
        e.stopPropagation();
        setIsActive(false);
    }

    return (
        <div className={styles.ProjectCardDiv}>
            <div className={styles.ProjectCardImg} onClick={clickHandler}>
                {
                    project.preview
                        ? <img src={project.preview}></img>
                        : null
                }
            </div>
            <div className={styles.ProjectCardDivInfo}>
                <CardInfo name={project.name} name_folder={locate.pathname === "/home/projects" ? name : undefined} date={project.updatedAt}/>
                <img style={{cursor: 'pointer'}} onClick={() => {setIsActive(isActive => !isActive)}} src={IconMenu} />
            </div>

            {
                isActive
                    ?
                    <div className={styles.SimpleMenuDiv}>
                        <PopUpMenu items={items} isFixedLeft={true} closeHandler={closeHandler}/>
                    </div>
                    :
                    null
            }
        </div>
    )
})

export default ProjectCard;