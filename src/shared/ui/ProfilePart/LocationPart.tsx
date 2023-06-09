import { City } from '../../../entities/City/City';
import DropDownSelect from '../DropDownSelect';
import styles from './css/ProfilePartMain.module.css';

const cities: City[] = [
    {
        id: 1,
        name: 'Саратов'
    },
    {
        id: 2,
        name: 'Москва'
    },
    {
        id: 3,
        name: 'Саранск'
    },
    {
        id: 4,
        name: 'ЙЙЙЙЙ'
    },
    {
        id: 5,
        name: 'цЦцц'
    },
    {
        id: 6,
        name: 'Сарацццнск'
    }
]

const LocationPart = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <p className={styles.Title}>Местонахождение</p>
            <DropDownSelect cities={cities} accountCity='Саратов'/>
        </div>
    )
}

export default LocationPart;