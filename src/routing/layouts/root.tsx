import styles from "../../app/App.module.css"
import UnauthorisedHeader from "../../shared/ui/UnauthorisedHeader";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../..";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";


const Root = observer(() => {
    const className : string = styles.App;
    const {store} = useContext(Context);


    useEffect(() => {
        store.refresh();
    }, [])


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
})

export default Root;