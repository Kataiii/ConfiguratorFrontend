import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError();
    
    return(
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Извините, произошла непредвиденная ошибка</p>
            <p>
                <Link to={'/'}>На главную</Link>
            </p>
        </div>
    );
}