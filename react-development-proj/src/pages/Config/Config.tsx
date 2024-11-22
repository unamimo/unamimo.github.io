import MyLink from "../../components/MyLink/MyLink";
import TextToSpeechToggle from "../../components/TextToSpeechToggle";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";

export default function Config (){
    return (
        <div role="main">
            <TitleLayout>
                <Region aria-label="Config">
                    <h1>
                        Config
                    </h1>
                </Region>
                <Region aria-labelledby="Config">
                    <p>Different configuration options are provided here</p>
                </Region>
                <TextToSpeechToggle/>
                <br/>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">Home</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}