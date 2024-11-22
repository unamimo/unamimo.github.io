import MyLink from "../../components/MyLink/MyLink";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";

export default function About (){
    return (
        <div role="main">
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