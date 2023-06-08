import { useState } from "react";
import FileLoader from "../FileLoader";

const FileUploader = () => {
 

    return(
        <div>
            <p>Изменить аватар</p>
            <div>
                <FileLoader/>
                <button>Сбросить</button>
            </div>
            <p>Можно загружать изображения в формате jpg, png весом не более 2 мб</p>
        </div>
    )
}

export default FileUploader;