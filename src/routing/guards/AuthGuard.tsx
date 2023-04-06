import { Navigate } from "react-router-dom";

interface AuthGuardProps{
    children : React.ReactElement;
}

const AuthGuard : React.FC<AuthGuardProps> = ({children}) => {
    //TODO переделать под redux
    const isAuthorized = true;

    return(
        isAuthorized
            ? 
            children
            :
            <Navigate to={'*'} replace/>
    )
}

export default AuthGuard;