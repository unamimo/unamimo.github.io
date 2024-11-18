import MyLink from "../../components/MyLink/MyLink";
import NarratedText from "../../components/NarratedText";
import TextToSpeechToggle from "../../components/TextToSpeechToggle";
import TitleLayout from "../../layout/TitleLayout";

export default function Config (){
    return (
        <div role="main">
            <TitleLayout>
                <h1>
                    <NarratedText text={"Config"}/>
                </h1>
                <p>Different configuration options are provided here</p>
                <TextToSpeechToggle/>
                <br/>
                <div role="navigation">
                    <MyLink renderAsButton={true} to="/">Home</MyLink>
                </div>
            </TitleLayout>
        </div>
    )
}