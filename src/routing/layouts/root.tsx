import Landing from "../../pages/Landing";
import styles from "../../app/App.module.css"
import UnauthorisedHeader from "../../shared/ui/UnauthorisedHeader";
import { Outlet } from "react-router-dom";


export default function Root(){
    const className : string = styles.App;

    return(
        <div className={className}>
            <UnauthorisedHeader></UnauthorisedHeader>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}