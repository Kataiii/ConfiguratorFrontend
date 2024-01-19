import { useEffect, useState } from 'react';
import { ICity } from '../../../entities/City/City';
import CityService from '../../../store/services/CityService';
import DropDownSelect from '../DropDownSelect';
import styles from './css/ProfilePartMain.module.css';


const LocationPart: React.FC = () => {

    // useEffect(() => {
    //     getCities();
    // }, [])

    // const getCities = async() => {
    //     const response = await CityService.getAllCities();
    //     setCitiesState(response.data);
    // }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p className={styles.Title}>Местонахождение</p>
{/* 
            {
                cities && cities.length > 0
                    ?
                    <DropDownSelect cities={cities} accountCity='Саратов' />
                    :
                    <p>Загрузка</p>
            } */}
        </div>
    )
}

export default LocationPart;