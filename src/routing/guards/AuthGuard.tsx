import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import LoadingPage from "../../pages/LoadingPage";


interface AuthGuardProps{
    children : React.ReactElement;
}

const AuthGuard : React.FC<AuthGuardProps> = observer(({children}) => {
    const [isLoading, setIsLoadingState] = useState(true);
    const {store, activeUser} = useContext(Context);
    let isAuthorized : boolean = store.getAuth();

    useEffect(() => {
        refreshToken();
    }, [])

    const refreshToken = async() => {
        await store.refresh();
        await activeUser.refreshActiveUser(store.getAccount());
        setIsLoadingState(false);
    }

    return(
        isLoading
        ?
            <LoadingPage/>
        :
            isAuthorized
                ? 
                children
                :
                <Navigate to={'-1'} replace/>
    )
})

export default AuthGuard;