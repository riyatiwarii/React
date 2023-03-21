import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Oops! Something went wrong! try again..</h2>
            <h3>{error.status} {error.statusText}</h3>
        </div>
    )
}

export default Error