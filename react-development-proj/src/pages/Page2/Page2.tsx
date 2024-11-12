import NarratedText from "../../components/NarratedText";
import TitleLayout from "../../layout/TitleLayout";

export default function Page2 (){
    return (
        <div role="main">
            <TitleLayout>
                <h1>
                    <NarratedText text={"Page 2"}/>
                </h1>
            </TitleLayout>
        </div>
    )
}