import MyLink from "../../components/MyLink/MyLink";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";

export default function Credits (){
    return (
        <div role="main">
            <TitleLayout>
                <Region aria-label="Credits">
                    <h1>
                        Credits
                    </h1>
                </Region>
                <Region aria-labelledby="Credits">
                    <p>
                        Credits will be added here in the future
                    </p>
                </Region>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">Home</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}