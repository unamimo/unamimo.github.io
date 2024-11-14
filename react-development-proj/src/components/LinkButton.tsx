// a component made to get around the accessibility issues of having a link component wrapped inside a button
// also to solve focus border issue with having a button wrapped inside a link
// nesting <button> and <a> is not valid html.
// this code has used a stackoverflow answer as inspiration:
// https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button#:~:text=LinkButton%20component%20%2D%20a%20solution%20for%20React%20Router%20v4 
// this is currently unused, as we are just using a styled link instead

import { ElementType, ReactNode } from "react";

interface LinkButtonProps<T extends ElementType> {
    as?: T;
    children: ReactNode;
}

export default function LinkButton<T extends ElementType = "button"> ({
    as,
    children,
    ...otherProps
}: 
    LinkButtonProps<T>
    & Omit<React.ComponentPropsWithoutRef<T>, keyof LinkButtonProps<T>>
) {

    const Component = as || 'button' as const;

    return(
        <Component
            {...otherProps}
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
        </Component>
    );
};