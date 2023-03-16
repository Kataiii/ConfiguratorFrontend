import Landing from "../pages/Landing";
import styles from "../app/App.module.css"


export default function Root(){
    const className : string = styles.App;

    return(
        <div className={className}>
            <Landing></Landing>
        </div>
    );
}