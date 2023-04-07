import { Navigate } from "react-router-dom";
import auth from "../../store/auth";
import { useState } from "react";


interface AuthGuardProps{
    children : React.ReactElement;
}

const AuthGuard : React.FC<AuthGuardProps> = ({children}) => {
    let isAuthorized : boolean = auth.formLogin.isAuthorised;

    return(
        isAuthorized
            ? 
            children
            :
            <Navigate to={'/login'} replace/>
    )
}

export default AuthGuard;