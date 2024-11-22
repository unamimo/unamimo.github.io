import MyLink from "../../components/MyLink/MyLink";
import { useTheme } from "../../context/ThemeContext";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";

export default function About (){
    const { darkTheme } = useTheme();
    
    return (
        <div role="main" className={darkTheme ? "dark-theme" : "light-theme"}>
            <TitleLayout>
                <Region aria-label={"About"}>
                    <h1>
                        About
                    </h1>    
                </Region>
                <Region aria-labelledby={"About"}>
                    <p>
                        Information about the project will be added here in the future
                    </p>
                </Region>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">Home</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}