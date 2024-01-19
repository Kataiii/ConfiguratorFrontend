import styles from "../../app/App.module.css"
import { Outlet } from "react-router-dom";


const Document: React.FC = () => {
    return(
        <div className={styles.App}>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Document;