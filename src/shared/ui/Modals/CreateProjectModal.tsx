import Button from "../ButtonPrim";
import Select from "../MySelect";
import styles from "../css/CreateProjectModal.module.css";

//TODO А они нужны?
// interface CreateProjectModalProps {

// }

const CreateProjectModal: React.FC = () => {
    return (
        <div className={styles.modalDiv}>
            <h1 className={styles.modalTitle}>Создать проект</h1>
            <div className={[styles.modalWrapInputs, styles.modalWrapFirstInputs].join(' ')}>
                <div>
                    <p className={styles.modalInscription}>Название проекта</p>
                    <input className={[styles.modalInput, styles.modalInputName].join(' ')} type='text' placeholder="Введите название..." />
                </div>
                <div>
                    <p className={styles.modalInscription}>Тип строения</p>
                    {/* TODO настроить селектор для типа строения */}
                    {/* <Select
                    options={options}
                    selected={selectedMonth || null}
                    onChange={handleMonthSelect}
                    placeholder="Выберите тип организации"
                /> */}
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