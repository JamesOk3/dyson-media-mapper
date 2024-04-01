import Illustration from "../../images/illustration/illustration-01.svg";
import Icons from "../Icons.jsx";

/**
 * Renders an error fallback component with a message, error details, and a button to go back to the home page.
 *
 * @param {Object} props - The props object containing the error and resetErrorBoundary function.
 * @param {Error} props.error - The error object that occurred.
 * @param {Function} props.resetErrorBoundary - The function to reset the error boundary.
 * @return {JSX.Element} The error fallback component.
 *
 * @author James M Kambanga
 * Date: March 30, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20">
            <div className="mx-auto max-w-[410px]">
                <img src={Illustration} alt="illustration" />

                <div className="mt-7.5 text-center">
                    <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
                        Sorry, the page can’t be found
                    </h2>
                    <p className="font-medium">
                        {error.message}
                    </p>
                    <button onClick={resetErrorBoundary}
                          className="mt-7.5 inline-flex items-center gap-2 rounded-md bg-primary py-3 px-6 font-medium text-white hover:bg-opacity-90">
                        <Icons id="left-arrow" width="16" height="16" viewBox="0 0 16 14" />
                        <span>Back to Homepage</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ErrorFallback;