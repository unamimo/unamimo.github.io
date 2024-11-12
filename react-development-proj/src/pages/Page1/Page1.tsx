import NarratedText from "../../components/NarratedText";
import TextToSpeechToggle from "../../components/TextToSpeechToggle";
import TitleLayout from "../../layout/TitleLayout";

export default function Page1 (){
    return (
        <div role="main">
            <TitleLayout>
                <h1>
                    <NarratedText text="Page 1"/>
                </h1>
                <TextToSpeechToggle/>
            </TitleLayout>
        </div>
    )
}