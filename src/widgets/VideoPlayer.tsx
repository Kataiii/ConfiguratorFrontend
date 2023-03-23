import styles from "./css/BlockCard.module.css"
import Button from "../shared/ui/ButtonPrim";
import { useNavigate } from "react-router-dom";


const VideoPlayer = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.BlockVideoPlayer}>
            <h2 className={styles.TitleVideoPlayer}>Обучающий ролик</h2>
            <p>Тут будет плеер</p>
            <Button title="Попробовать!" onClick={() => navigate('/login')}></Button>
        </div>
    )
}

export default VideoPlayer;