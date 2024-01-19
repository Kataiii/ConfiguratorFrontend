import styles from "../../app/App.module.css"
import RegisterHeader from "../../shared/ui/Headers/RegisterHeader";
import { Outlet } from "react-router-dom";


const Root: React.FC = () => {
    return (
        <div className={styles.App}>
            <RegisterHeader></RegisterHeader>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Root;
