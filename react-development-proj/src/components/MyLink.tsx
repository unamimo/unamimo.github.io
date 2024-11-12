import { ReactNode } from "react";
import { Link } from "react-router-dom";

// create custom link component to change the default styling
// this will most likely be replaced by focus, hover and visited global styling in the future
// if global styling is applied, this component may become redundant in the future

interface MyLinkProps {
    to: string;
    children: ReactNode
}

export default function MyLink ({
    to,
    children
}: MyLinkProps) {
    return(
        <Link
            to={to}
            style={{
                textDecoration: "none",
                color: 'inherit'
            }}
        >
            {children}
        </Link>
    )
}