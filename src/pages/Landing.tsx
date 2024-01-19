import styles from "../app/App.module.css"
import Banner from "../widgets/Banner";
import BlockCards from "../widgets/BlocksCards/BlockCards";
import Slider from "../widgets/Slider";
import VideoPlayer from "../widgets/VideoPlayer";
import BlockPartners from "../widgets/BlockPartners";
import Footer from "../shared/ui/Footer";
import BlockCardsAdvantages from "../widgets/BlocksCards/BlockCardsAdvantages";
import BlockCardLicencce from "../widgets/BlocksCards/BlockCardsLicence";


const Landing: React.FC = () =>{

    return(
        <div className={styles.App}>
            <Banner/>
            <BlockCards/>
            <Slider autoPlay={false} autoPlayTime={100} width={"100%"} height={"100%"}/>
            <BlockCardsAdvantages/>
            <VideoPlayer/>
            <BlockCardLicencce/>
            <BlockPartners/>
            <Footer/>
        </div>
    );
}

export default Landing;