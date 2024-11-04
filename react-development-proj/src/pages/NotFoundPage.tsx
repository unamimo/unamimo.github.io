import MyLink from "../components/MyLink";

export default function NotFoundPage () {
    return(
        <>
            <div>404 Not Found</div>
            <div>
                <MyLink to="/">Go to the home page</MyLink>
            </div>
        </>
    )
}