import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const errorPage = useRouteError()
    console.error(errorPage);
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorPage.status}</i>
                <i> - </i>
                <i>{errorPage.statusText}</i>
            </p>
        </div>
    );
}

export default ErrorPage;