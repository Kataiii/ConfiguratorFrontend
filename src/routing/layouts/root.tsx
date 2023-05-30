import Landing from "../../pages/Landing";
import styles from "../../app/App.module.css"
import UnauthorisedHeader from "../../shared/ui/UnauthorisedHeader";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../..";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Root(){
    const className : string = styles.App;
    const {store} = useContext(Context);
    const locate = useLocation();

    if(store.isAuth){
        return(
            <div className={className}>
                <AuthorisedHeader/>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        );
    }

    return(
        <div className={className}>
            <UnauthorisedHeader/>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}