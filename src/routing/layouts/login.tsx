import styles from "../../app/App.module.css"
import RegisterHeader from "../../shared/ui/Headers/RegisterHeader";
import { Outlet } from "react-router-dom";


export default function Root(){
    return(
        <div className={styles.App}>
            <RegisterHeader></RegisterHeader>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}
