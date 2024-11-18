import { Link } from "react-router-dom";
import style from './MyLink.module.css'
import { useVoice } from "../../hooks/useVoice";


interface MyLinkProps {
    to: string;
    children?: string
    renderAsButton?: Boolean
}

export default function MyLink ({
    to,
    children,
    renderAsButton
}: MyLinkProps) {
    const voiceText = useVoice();

    return(
        <>
        <Link
            to={to}
            className={renderAsButton ? style.myLinkAsButton : style.myLink}
            onFocus={() => voiceText(children)}
        >
            {children}
        </Link>
        </>
    )
}