import { PropsWithChildren, ReactNode } from "react";

// contains the layout for the title screen

interface TitleLayoutProps {
  children?: ReactNode;
}

export default function TitleLayout({
  children
}: PropsWithChildren<TitleLayoutProps>) {
    return (
      <>
        {/*container for everything*/}
        {/*may include header and footer in the future */}
        <div style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          minHeight: "100vh",
        }}>
          {/* Container for centring content in the middle of the screen
            - flex: '1 0 auto' - child element grows to fill space and pushes the footer to the bottom
            - flexGrow makes the content grow to the window size
            - overflow: auto, means that content does not go beyond its container
            - minHeight must be 100vh for the footer to be at the bottom of the screen
            - maxWidth - maxiumum width of our centred content
            - centred horizontally and vertically using alignItems and justifyContent
          */}
          <div style={{
            flexGrow: 3,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            maxWidth: "1280px",
            height: "100%",
            width: "100%",
            alignSelf: "center",
            flex: "1 0 auto",
            alignItems: "center",       // centres child divs as well as content, remove for divs to span
            justifyContent: "center"    // centres child content within content divs
          }}>
            {children}
          </div>
        </div>
      </>
    )
  }