import Button from "../ButtonPrim";
import Select from "../MySelect";
import styles from "../css/CreateProjectModal.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { IConstructionType } from "../../../entities/ConstructionType";
import ConstructionTypeService from "../../../store/services/ConstructionTypeService";
import { Context } from "../../..";
import { ICity } from "../../../entities/City";
import CityService from "../../../store/services/CityService";
import useInput from "../../hooks/UseInput";
import { useOutsideClick } from "../../hooks/UseOutsideClick";
import { ICreateProjectDto } from "../../../entities/Project";
import { useNavigate } from "react-router-dom";

interface CreateProjectModalProps{
    closeHandler: (e: any) => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({closeHandler}) => {
    const { store, folderStore, projectStore } = useContext(Context);
    const navigate = useNavigate();

    const [constructionTypes, setConstructionTypes] = useState<IConstructionType[]>([]);
    const [idType, setIdType] = useState<number>(1);
    const [city, setCity] = useState<ICity>();
    const name = useInput();
    const countFloor = useInput();

    const divRef = useRef<HTMLDivElement>(null);
    useOutsideClick(divRef, closeHandler);

    useEffect(() => {
        const response = ConstructionTypeService.getAllConstructionTypes();
        response.then(response => {
            setConstructionTypes(response);
        })

        const responseCity = CityService.getCityById(store.getAccount().city_id ?? 1);
        responseCity.then(response => {
            setCity(response);
        })
    }, []);


    const handleMonthSelect = (id: number) => {
        setIdType(id);
    };

    const handleClick = async() => {
        let projectInfo: ICreateProjectDto = {
            name: name.value,
            construction_type_id: idType,
            floor_number: Number(countFloor.value),
            folder_id: folderStore.getAciveFolder()?.id ?? folderStore.getFoldersProject().find(item => item.name === 'Неотсортированные')!.id,
            role_id: store.getActiveRole()?.id ?? 4
        }

        const project = await projectStore.addNewProject(projectInfo, store.getAccount().id);
        const nameFolder = folderStore.getFoldersProject().find(item => item.id === project.folder_id)!.name;
        navigate(`/home/configurator/${nameFolder}/${project.name}`);
    }

    return (
        <div ref={divRef} className={styles.modalDiv}>
            <h1 className={styles.modalTitle}>Создать проект</h1>
            <div className={[styles.modalWrapInputs, styles.modalWrapFirstInputs].join(' ')}>
                <div>
                    <p className={styles.modalInscription}>Название проекта</p>
                    <input className={[styles.modalInput, styles.modalInputName].join(' ')}
                        type='text'
                        placeholder="Введите название..."
                        onChange={name.onChange}
                        value={name.value} />
                </div>
                <div style={{ width: '100%' }}>
                    <p className={styles.modalInscription}>Тип строения</p>
                    <Select
                        options={constructionTypes}
                        selected={constructionTypes.find((item) => item.id === idType) ?? null}
                        onChange={handleMonthSelect}
                        placeholder="Выберите тип строения..."
                    />
                </div>
            </div>

            <div className={[styles.modalWrapInputs, styles.modalWrapSecondInputs].join(' ')}>
                <div>
                    <p className={styles.modalInscription}>Количество этажей</p>
                    <input className={[styles.modalInput, styles.modalInputCountFloor].join(' ')}
                        type='number'
                        min='1'
                        placeholder="Введите количество..."
                        value={countFloor.value}
                        onChange={countFloor.onChange} />
                </div>
                <div>
                    <p className={styles.modalInscription}>Город</p>
                    {/* TODO добавить свой input для городов */}
                    <input className={[styles.modalInput, styles.modalInputCity].join(' ')} type='text' placeholder="Введите город..." value={city?.name} />
                </div>
            </div>

            <div className={styles.modalButtonWrap}>
                <Button title={"Создать"} onClick={handleClick} isDisabled={false} />
            </div>
        </div>
    );
}

export default CreateProjectModal;