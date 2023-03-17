import Header from "../widgets/Header";
import styles from "../app/App.module.css"
import Banner from "../widgets/Banner";


const Landing = () =>{

    return(
        <div className={styles.App}>
            <Header></Header>
            <Banner></Banner>
        </div>
    );
}

export default Landing;