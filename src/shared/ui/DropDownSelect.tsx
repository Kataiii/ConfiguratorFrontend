import DropDownArrow from '../../assets/icons/icon-dropdown select.svg';
import SearchInput from './SearchInput';
import styles from './css/DropDownSelect.module.css';
import { useState } from 'react';
import { City } from '../../entities/City/City';



interface DropDownSelectProps{
    cities: City[];
    accountCity: string;
}

const DropDownSelect: React.FC<DropDownSelectProps> = ({cities, accountCity}) => {
    const [visible, setVisibleState] = useState(false);
    
    const onClickHandler = () => {
        setVisibleState(!visible);
    }

    return(
        <div className={styles.Wrap}>
            <div className={styles.Select}  onClick={onClickHandler}>
                <p className={styles.SelectTitle}>{accountCity}</p>
                <img className={!visible ? styles.SelectImageDown : styles.SelectImageUp} src={DropDownArrow} alt='arrow'></img>
            </div>
            <div className={visible ? styles.DropDownVisible : styles.DropDownNotVisible}>
                <SearchInput/>
                <>
                    {
                        cities.map(item => {
                            return <p key={item.id}>{item.name}</p>
                        })
                    }
                </>
            </div>
        </div>
    )
}

export default DropDownSelect;