import FileLoader from "../FileLoader";
import styles from './css/ProfilePartMain.module.css';
import stylesWrap from './css/FileUploader.module.css';
import { createContext, useState } from "react";

interface isLoadFile{
    isLoad: boolean,
    setIsLoadState: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoaderContext = createContext<isLoadFile>({
    isLoad: false,
    setIsLoadState: () => {}
});

const FileUploader = () => {
    const [isLoad, setIsLoadState] = useState(false);
    const valueContext = {isLoad, setIsLoadState};

    const onClickHandler = () => {
        //Не работает
        let inputFile: HTMLElement | null = document.getElementById('getFile');
        if (inputFile != null) {
            let input: HTMLInputElement = inputFile as HTMLInputElement;
            input.value = '';
        }
        setIsLoadState(false);
    }

    return(
        <LoaderContext.Provider value={valueContext}>
            <div className={stylesWrap.MainWrap}>
                <p className={styles.Title}>Изменить аватар</p>
                <div className={stylesWrap.WrapLoader}>
                    <div className={stylesWrap.WrapBtn}>
                        <FileLoader/>
                        <button className={styles.Button} onClick={onClickHandler}>Сбросить</button>
                    </div>
                    <p className={styles.Hint}>Можно загружать изображения в формате jpg, png весом не более 2 мб</p>
                </div>
            </div>
        </LoaderContext.Provider>
    )
}

export default FileUploader;