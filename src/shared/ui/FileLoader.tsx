import styles from './css/FileLoad.module.css';
import { useContext, useState } from "react";
import { LoaderContext } from './ProfilePart/FileUploader';

const FileLoader = () => {
    let {isLoad, setIsLoadState} = useContext(LoaderContext);
    const styleBtn = isLoad ? styles.LoadBtn : styles.NotLoadBtn;

    const onClickHandler = () => {
        let inputFile: HTMLElement | null = document.getElementById('getFile');
        if (inputFile != null) {
            inputFile.click();
            let input: HTMLInputElement = inputFile as HTMLInputElement;
            input.addEventListener('change', function () {
                if (this.value) {
                    setIsLoadState(true);
                } else {
                    setIsLoadState(false);
                }
            });
        }
    }

    return(
        <div>
            <input type='file' id='getFile' className={styles.getFile}/>
            <input className={styleBtn}
                        onClick={onClickHandler}
                        type='text'
                        readOnly
                        value={isLoad ? 'Загружено' : 'Загрузить'} />
        </div>
    )
}

export default FileLoader;