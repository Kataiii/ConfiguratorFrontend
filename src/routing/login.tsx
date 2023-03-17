import Login from "../pages/LoginPage";
import styles from "../app/App.module.css"


export default function Root(){
    return(
        <div className={styles.App}>
            <Login></Login>
        </div>
    );
}