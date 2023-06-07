import styles from "../app/App.module.css"
import Banner from "../widgets/Banner";
import BlockCards from "../widgets/BlockCards";
import Slider from "../widgets/Slider";
import BlockCardsAdvantages from "../widgets/BlockCardsAdvantages";
import VideoPlayer from "../widgets/VideoPlayer";
import BlockCardLicencce from "../widgets/BlockCardsLicence";
import BlockPartners from "../widgets/BlockPartners";
import Footer from "../shared/ui/Footer";


const Landing =  () =>{

    return(
        <div className={styles.App}>
            <Banner/>
            <BlockCards/>
            <Slider/>
            <BlockCardsAdvantages/>
            <VideoPlayer/>
            <BlockCardLicencce/>
            <BlockPartners/>
            <Footer/>
        </div>
    );
}

export default Landing;