import Header from "../widgets/Header";
import styles from "../app/App.module.css"

const className:string = styles.App;

const Landing = () =>{

    return(
        <div className={className}>
            <Header></Header>
        </div>
    );
}

export default Landing;