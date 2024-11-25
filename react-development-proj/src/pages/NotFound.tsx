import MyLink from "../components/MyLink/MyLink";

export default function NotFound () {
    return(
        <>
            <h1>404 Not Found</h1>
            <p>
                <MyLink to="/">Go to the home page</MyLink>
            </p>
        </>
    )
}