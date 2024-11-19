import MyLink from "../../components/MyLink/MyLink";
import TitleLayout from "../../layout/TitleLayout";

export default function About (){
    return (
        <div role="main">
            <TitleLayout>
                <h1>
                    About
                </h1>
                <p>
                    Information about the project will be added here in the future
                </p>
                <div role="navigation">
                    <MyLink renderAsButton={true} to="/">Home</MyLink>
                </div>
            </TitleLayout>
        </div>
    )
}