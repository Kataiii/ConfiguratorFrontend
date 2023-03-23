import styles from "../app/App.module.css"
import Banner from "../widgets/Banner";
import BlockCards from "../widgets/BlockCards";
import Slider from "../widgets/Slider";
import BlockCardsAdvantages from "../widgets/BlockCardsAdvantages";
import VideoPlayer from "../widgets/VideoPlayer";
import BlockCardLicencce from "../widgets/BlockCardsLicence";


const Landing = () =>{

    return(
        <div className={styles.App}>
            <Banner/>
            <BlockCards/>
            <Slider/>
            <BlockCardsAdvantages/>
            <VideoPlayer/>
            <BlockCardLicencce/>
        </div>
    );
}

export default Landing;