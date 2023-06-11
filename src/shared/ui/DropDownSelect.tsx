import DropDownArrow from '../../assets/icons/icon-dropdown select.svg';
import SearchInput from './SearchInput';
import styles from './css/DropDownSelect.module.css';
import { useState } from 'react';
import { ICity } from '../../entities/City/City';



interface DropDownSelectProps{
    cities: ICity[];
    accountCity: string;
}

const DropDownSelect: React.FC<DropDownSelectProps> = ({cities, accountCity}) => {
    const [value, setValueState] = useState(accountCity != undefined ? accountCity : 'Выберите город...');
    const [visible, setVisibleState] = useState(false);
    
    const onClickHandler = () => {
        setVisibleState(!visible);
    }

    const onClickHandlerItem = (e:any) => {
        setValueState(e.target.value);
        setVisibleState(!visible);
    }

    return(
        <div className={styles.Wrap}>
            <div className={styles.Select}  onClick={onClickHandler}>
                <p className={styles.SelectTitle}>{value}</p>
                <img className={!visible ? styles.SelectImageDown : styles.SelectImageUp} src={DropDownArrow} alt='arrow'></img>
            </div>
            <div className={visible ? styles.DropDownVisible : styles.DropDownNotVisible}>
                <SearchInput/>
                <div className={styles.WrapItems}>
                    {
                        cities.map(item => {
                            return <button className={styles.DropDownContent} 
                                            value={item.name} 
                                            onClick={onClickHandlerItem} 
                                            key={item.id}>{item.name}</button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DropDownSelect;