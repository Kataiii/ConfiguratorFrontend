import styles from "../../app/App.module.css"
import { Outlet } from "react-router-dom";


export default function Document(){
    return(
        <div className={styles.App}>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}