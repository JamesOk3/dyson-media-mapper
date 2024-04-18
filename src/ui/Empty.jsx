
/**
 * Generate an empty state component with a message indicating that no {resourceName} could be found.
 *
 * @param {object} resourceName - The name of the resource to be displayed in the message
 * @return {JSX.Element} The empty state component
 *
 * @author James M Kambanga
 * Date: April 13, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function Empty({resourceName}) {
    return (
        <div >
            {/*<Icons id="empty" width="60" height="60" viewBox="0 0 60 60" className="fill-current stroke-current"/>*/}
            <p className="mt-5.5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                No {resourceName} could be found
            </p>

        </div>
    );
}

export default Empty;