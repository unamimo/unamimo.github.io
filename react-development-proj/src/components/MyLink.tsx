import { ReactNode } from "react";
import { Link } from "react-router-dom";

// create custom link component to change the default styling
// this will most likely be replaced by focus, hover and visited global styling in the future
// if global styling is applied, this component may become redundant in the future

interface MyLinkProps {
    to: string;
    children?: ReactNode
    renderAsButton?: Boolean
}

export default function MyLink ({
    to,
    children,
    renderAsButton
}: MyLinkProps) {
    return(
        <Link
            to={to}
            style={
                renderAsButton ? (
                    {
                    margin: "30px",
                    marginTop: "0px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "1.2em 1.8em",
                    borderRadius: "8px",
                    border: "1px solid transparent",
                    fontSize: "1em",
                    fontWeight: "500",
                    textDecoration: "none",
                    }
                ) : (
                    {
                    textDecoration: "none",
                    color: 'inherit'
                    }
                )
            }
        >
            {children}
        </Link>
    )
}