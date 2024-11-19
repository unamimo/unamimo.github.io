import MyLink from "../../components/MyLink/MyLink";
import TitleLayout from "../../layout/TitleLayout";

export default function Credits (){
    return (
        <div role="main">
            <TitleLayout>
                <h1>
                    Credits
                </h1>
                <p>
                    Credits will be added here in the future
                </p>
                <div role="navigation">
                    <MyLink renderAsButton={true} to="/">Home</MyLink>
                </div>
            </TitleLayout>
        </div>
    )
}