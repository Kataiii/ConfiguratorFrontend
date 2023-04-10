import { Navigate } from "react-router-dom";
import auth from "../../store/auth";
import { useState } from "react";
import registUser from "../../store/registUser";
import { useNavigate } from "react-router-dom";


interface AuthGuardProps{
    children : React.ReactElement;
}

const AuthGuard : React.FC<AuthGuardProps> = ({children}) => {
    let isAuthorized : boolean = auth.formLogin.isAuthorised || registUser.formRegist.isRegist;

    return(
        isAuthorized
            ? 
            children
            :
            <Navigate to={'-1'} replace/>
    )
}

export default AuthGuard;