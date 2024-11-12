import { ReactNode } from "react";
import MyLink from "./MyLink";


interface LinkButtonProps {
    goTo: string;
    children: ReactNode;
}

export default function LinkButton ({
    goTo,
    children
}: LinkButtonProps) {

    const goToLink = () => {
        <MyLink to={goTo}/>
    };

    return(
        <button
            onClick={() => goToLink()}
            style={{
                margin: "30px",
                marginTop: "0px",
                backgroundColor: "black",
                color: "white",
                padding: "1.2em 1.8em",
                borderRadius: "8px",
                border: "1px solid transparent",
                fontSize: "1em",
                fontWeight: "500",
            }}
        >
            {children}
        </button>
    );
};