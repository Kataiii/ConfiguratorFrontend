import styles from "../app/App.module.css"
import Banner from "../widgets/Banner";
import BlockCards from "../widgets/BlockCards";
import Slider from "../widgets/Slider";


const Landing = () =>{

    return(
        <div className={styles.App}>
            <Banner></Banner>
            <BlockCards></BlockCards>
            <Slider></Slider>
        </div>
    );
}

export default Landing;