import { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from './MyLink.module.css'

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
        <>
        {console.log(style)}
        <Link
            to={to}
            className={renderAsButton ? style.myLinkAsButton : style.myLink}
        >
            {children}
        </Link>
        </>
    )
}