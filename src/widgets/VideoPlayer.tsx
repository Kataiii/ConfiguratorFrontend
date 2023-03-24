import styles from "./css/BlockCard.module.css"
import Button from "../shared/ui/ButtonPrim";
import { useNavigate } from "react-router-dom";
import Video from "../shared/ui/Video";


const VideoPlayer = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.BlockVideoPlayer}>
            <h2 className={styles.TitleVideoPlayer}>Обучающий ролик</h2>
            <Video/>
            <Button title="Попробовать!" onClick={() => navigate('/login')}></Button>
        </div>
    )
}

export default VideoPlayer;