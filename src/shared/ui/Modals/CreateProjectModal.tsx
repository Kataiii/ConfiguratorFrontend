import Button from "../ButtonPrim";
import Select from "../MySelect";
import styles from "../css/CreateProjectModal.module.css";
import { useEffect, useState } from "react";
import { IConstructionType } from "../../../entities/ConstructionType";
import ConstructionTypeService from "../../../store/services/ConstructionTypeService";


const CreateProjectModal: React.FC = () => {
    const [constructionTypes, setConstructionTypes] = useState<IConstructionType[]>([]);
    const [idType, setIdType] = useState(1);

    const handleMonthSelect = (id: number) => {
      setIdType(id);
    };

    useEffect(() => {
        const response = ConstructionTypeService.getAllConstructionTypes();
        response.then(response => {
            setConstructionTypes(response);
        })
    }, [])

    return (
        <div className={styles.modalDiv}>
            <h1 className={styles.modalTitle}>Создать проект</h1>
            <div className={[styles.modalWrapInputs, styles.modalWrapFirstInputs].join(' ')}>
                <div>
                    <p className={styles.modalInscription}>Название проекта</p>
                    <input className={[styles.modalInput, styles.modalInputName].join(' ')} type='text' placeholder="Введите название..." />
                </div>
                <div style={{width: '100%'}}>
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
                    <input className={[styles.modalInput, styles.modalInputCountFloor].join(' ')} type='number' min='1' placeholder="Введите количество..." />
                </div>
                <div>
                    <p className={styles.modalInscription}>Город</p>
                    {/* TODO добавить свой input для городов */}
                    <input className={[styles.modalInput, styles.modalInputCity].join(' ')} type='text' placeholder="Введите город..."/>
                </div>
            </div>

            <div className={styles.modalButtonWrap}>
                <Button title={"Создать"} onClick={undefined} isDisabled={false} />
            </div>
        </div>
    );
}

export default CreateProjectModal;