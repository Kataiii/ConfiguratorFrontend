import styles from "../app/App.module.css"
import Banner from "../widgets/Banner";
import BlockCards from "../widgets/BlockCards";


const Landing = () =>{

    return(
        <div className={styles.App}>
            <Banner></Banner>
            <BlockCards></BlockCards>
        </div>
    );
}

export default Landing;