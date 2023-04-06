import { Navigate } from "react-router-dom";

interface RoleGuardProps{
    childrenUser : React.ReactElement
}

const RoleUserGuard : React.FC<RoleGuardProps> = ({childrenUser}) => {
    const isUser = true;

    return(
        isUser
            ?
            childrenUser
            :
            <Navigate to={'*'} replace/>
    )

}

export default RoleUserGuard;