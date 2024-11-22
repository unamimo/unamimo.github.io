import { useLandmark } from "@react-aria/landmark";
import { useRef } from "react";

export function Navigation(props: any) {
    let ref = useRef<HTMLElement | null>(null);
    let {landmarkProps} = useLandmark({...props, role: 'navigation'}, ref);

    return (
        <nav ref={ref} {...props} {...landmarkProps}>
        {props.children}
        </nav>
    )
}

export function Region(props: any) {
    let ref = useRef<HTMLElement | null>(null);
    let {landmarkProps} = useLandmark({...props, role: 'region'}, ref);

    return (
        <div ref={ref} {...props} {...landmarkProps}>
        {props.children}
        {/* {console.log(props.children.props.children.type)}
        {console.log(props.children.props.children.props.children)} */}
        </div>
    );
}
