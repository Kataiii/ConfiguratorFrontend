import { useEffect, useState } from 'react';
import { ICity } from '../../../entities/City/City';
import CityService from '../../../services/CityService';
import DropDownSelect from '../DropDownSelect';
import styles from './css/ProfilePartMain.module.css';


const LocationPart = () => {
    const [cities, setCitiesState] = useState([] as ICity[]);

    useEffect(() => {
        getCities();
    }, [])

    const getCities = async() => {
        const response = await CityService.getAllCities();
        setCitiesState(response.data);
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <p className={styles.Title}>Местонахождение</p>
            <DropDownSelect cities={cities} accountCity='Саратов'/>
        </div>
    )
}

export default LocationPart;