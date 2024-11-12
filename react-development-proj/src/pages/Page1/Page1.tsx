import NarratedText from "../../components/NarratedText";
import TextToSpeechToggle from "../../components/TextToSpeechToggle";
import TitleLayout from "../../layout/TitleLayout";

export default function Page1 (){
    return (
        <>
            <TitleLayout>
                <NarratedText text="Page 1"/>
                <TextToSpeechToggle/>
            </TitleLayout>
        </>
    )
}