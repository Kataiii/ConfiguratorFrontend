import styles from "../../app/App.module.css";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import { Outlet } from "react-router-dom";


export default function Root(){
    return(
        <div className={styles.App}>
            <AuthorisedHeader></AuthorisedHeader>
            {/* Будет еще боковая панель */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}