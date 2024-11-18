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
                <TextToSpeechToggle/>
            </TitleLayout>
        </div>
    )
}