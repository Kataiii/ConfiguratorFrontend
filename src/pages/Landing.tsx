import Header from "../widgets/Header";
import styles from "../app/App.module.css"
import Banner from "../widgets/Banner";

const className:string = styles.App;

const Landing = () =>{

    return(
        <div className={className}>
            <Header></Header>
            <Banner></Banner>
        </div>
    );
}

export default Landing;