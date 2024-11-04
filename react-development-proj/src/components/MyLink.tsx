import { ReactNode } from "react";
import { Link } from "react-router-dom";

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
                textDecoration: "none"
            }}
        >
            {children}
        </Link>
    )
}