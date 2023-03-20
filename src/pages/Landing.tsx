import styles from "../app/App.module.css"
import Banner from "../widgets/Banner";
import BlockCards from "../widgets/BlockCards";
import Slider from "../widgets/Slider";
import BlockCardsAdvantages from "../widgets/BlockCardsAdvantages";


const Landing = () =>{

    return(
        <div className={styles.App}>
            <Banner/>
            <BlockCards/>
            <Slider/>
            <BlockCardsAdvantages/>
        </div>
    );
}

export default Landing;