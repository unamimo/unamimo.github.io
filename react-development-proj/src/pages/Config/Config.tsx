import MyLink from "../../components/MyLink/MyLink";
import TextToSpeechToggle from "../../components/TextToSpeechToggle";
import ToggleTheme from "../../components/ToggleTheme";
import { useTheme } from "../../context/ThemeContext";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";

export default function Config (){
    const { darkTheme } = useTheme();
    
    return (
        <div role="main" className={darkTheme ? "dark-theme" : "light-theme"}>
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
                <ToggleTheme/>
                <br/>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">Home</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}