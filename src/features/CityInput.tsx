import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import styles from "./css/CityInput.module.css";


interface CityInputProps{
    styleInput: string;
    placeholder: string;
}

const CityInput: React.FC<CityInputProps> = observer(({styleInput, placeholder}) => {
    const {store, cityStore} = useContext(Context);
    const [city, setCity] = useState('');

    useEffect(() => {
        const response = cityStore.getCityByIdFromBack(store.getAccount().city_id);
        response.then( response => {
            setCity(city => response.name);
            console.log(city);
        });
    })

    return(
        <div>
            <input value={city} className={[styles.inputMain, styles[styleInput]].join(' ')} type={'text'} placeholder={placeholder}/>
        </div>
    )
})

export default CityInput;