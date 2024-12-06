// base code taken from useLandmark sample code

import { useLandmark } from "@react-aria/landmark";
import { ReactNode, useRef } from "react";
import { useVoice } from "../hooks/useVoice";

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
    let {landmarkProps} = useLandmark({role: 'navigation'}, ref);

    console.log(ariaLabel);

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

export function Region({
    ariaLabel,
    children,
    style
}: LandmarkNavProps) {
    let ref = useRef<HTMLDivElement | null>(null);
    let {landmarkProps} = useLandmark({role: 'region'}, ref);
    const voiceText = useVoice();

    console.log(ariaLabel);

    return (
        <div 
        ref={ref} 
        //{...props} 
        {...landmarkProps} 
        aria-label={ariaLabel}
        style={style}
        onFocus={() => voiceText(ariaLabel)}
        >
        {children}
        {/* {console.log(props.children.props.children.type)}
        {console.log(props.children.props.children.props.children)} */}
        </div>
    );
}
