import { useState } from 'react';
import styles from './css/SearchInput.module.css';


const SearchInput = () => {
    const [inputState, setInputState] = useState('');
    const onChangeHandler = (e: any) => {
        setInputState(e.target.value);
    }

    return(
        <div className={styles.DivWrapInput}>
            <input className={styles.Input} value={inputState} type='search' placeholder="Поиск..." onChange={onChangeHandler}/>
        </div>
    )
}

export default SearchInput;