import NarratedText from "../../components/NarratedText";
import TitleLayout from "../../layout/TitleLayout";

export default function About (){
    return (
        <div role="main">
            <TitleLayout>
                <h1>
                    <NarratedText text="About"/>
                </h1>
            </TitleLayout>
        </div>
    )
}