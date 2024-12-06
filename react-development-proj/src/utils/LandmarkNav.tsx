// base code taken from useLandmark sample code

import { useLandmark } from "@react-aria/landmark";
import { ReactNode, useRef } from "react";
import { useVoice } from "../hooks/useVoice";
import { useTranslation } from "react-i18next";

interface LandmarkNavProps {
    ariaLabel: string;
    children: ReactNode;
    style?: object;
}

export function Navigation({
    ariaLabel,
    children,
    style
}: LandmarkNavProps) {
    let ref = useRef<HTMLElement | null>(null);
    let {landmarkProps} = useLandmark({role: 'navigation', "aria-label": ariaLabel}, ref);
    //const { t } = useTranslation();

    //console.log(ariaLabel);

    return (
        <nav 
        ref={ref} 
        //{...props} 
        {...landmarkProps} 
        aria-label={ariaLabel}
        style={style}
        //onFocus={() => voiceText(ariaLabel)}
        >
        {children}
                {/* {console.log(props.children.props.children.type)}
        {console.log(props.children.props.children.props.children)} */}
        </nav>
    )
}

// aria labels for region are set as translation keys, this is so that the labels can directly be converted
export function Region({
    ariaLabel,
    children,
    style
}: LandmarkNavProps) {
    let ref = useRef<HTMLDivElement | null>(null);
    let {landmarkProps} = useLandmark({role: 'region', "aria-label": ariaLabel}, ref);
    const voiceText = useVoice();
    const { t } = useTranslation();

    console.log(t(ariaLabel));

    return (
        <div 
        ref={ref} 
        //{...props} 
        {...landmarkProps} 
        aria-label={ariaLabel}
        style={style}
        //converts aria label to translation key
        onFocus={() => voiceText(t(ariaLabel))}
        >
        {children}
        {/* {console.log(props.children.props.children.type)}
        {console.log(props.children.props.children.props.children)} */}
        </div>
    );
}
