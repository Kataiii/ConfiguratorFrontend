import { Navigate } from "react-router-dom";
import auth from "../../store/auth";
import { useContext, useEffect, useState } from "react";
import registUser from "../../store/registUser";
import { useNavigate } from "react-router-dom";
import { Context } from "../..";


interface AuthGuardProps{
    children : React.ReactElement;
}

const AuthGuard : React.FC<AuthGuardProps> = ({children}) => {
    const {store} = useContext(Context);
    let isAuthorized : boolean = store.isAuth;

    useEffect(() => {
        store.refresh();
    }, [])

    return(
        isAuthorized
            ? 
            children
            :
            <Navigate to={'-1'} replace/>
    )
}

export default AuthGuard;