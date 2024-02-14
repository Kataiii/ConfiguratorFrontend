import styles from './ProjectCard.module.css';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProject } from '../../entities/Project';
import PopUpMenu, { PopUpMenuItem } from '../../shared/ui/DropDown/PopUpMenu';
import CardInfo from './CardInfo';
import { ColorText } from '../../entities/Enums/ColorTextPopUp';
import IconMenu from "../../assets/icons/icon-dropdown menu.svg";
import FolderProjectService from '../../store/services/FolderProjectServeice';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';


interface ProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = observer(({ project }) => {
    const {folderStore} = useContext(Context);
    const locate = useLocation();
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [name, setName] = useState<string>('');

    const items: PopUpMenuItem[] = useMemo<PopUpMenuItem[]>(() => [
        {
            content: 'Открыть',
            action: () => console.log('Открыть'),
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
            action: () => console.log('Удалить'),
            color: ColorText.Red
        }
    ], [])


    useEffect(() => {
        if(locate.pathname === '/home/project'){
            const response = FolderProjectService.getFolderById(project.folder_id);
            response.then(response => {
                setName(response.name);
            })
        }
    }, [locate.pathname]);

    const clickHandler = () => {
        const folderName = folderStore.getFoldersProject().find(item => item.id === project.folder_id);
        console.log(project);
        console.log(folderName);
        navigate(`/home/configurator/${folderName}/${project.name}`);
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
                <CardInfo name={project.name} />
                <img style={{cursor: 'pointer'}} onClick={() => {setIsActive(isActive => !isActive)}} src={IconMenu} />
            </div>

            {
                isActive
                    ?
                    <div className={styles.SimpleMenuDiv}>
                        <PopUpMenu items={items} isFixedLeft={true} />
                    </div>
                    :
                    null
            }
        </div>
    )
})

export default ProjectCard;