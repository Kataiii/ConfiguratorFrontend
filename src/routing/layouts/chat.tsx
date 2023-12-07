import styles from "../../app/App.module.css"
import { Outlet } from "react-router-dom";
import AuthorisedHeader from "../../shared/ui/Headers/AuthorisedHeader";


export default function Chat(){
    return(
        <div className={styles.App}>
            <AuthorisedHeader/>
            <div style={{marginTop:'100px'}}>
                <Outlet></Outlet>
            </div>
        </div>
    );
}