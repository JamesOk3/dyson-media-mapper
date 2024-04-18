import Icons from "../Icons.jsx";

/**
 * Function component for displaying a loading spinner with a label.
 *
 * @param {object} label - The text label to display next to the spinner.
 * @return {JSX.Element} The JSX element representing the spinner with the provided label.
 *
 * @author James M Kambanga
 * Date: April 11, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function SpinnerMin({label}) {
    return (
        <div className="m-1.5 flex items-center">
            <Icons id="spinner" className="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16"/>
                <span className="ml-2">{label} </span>
        </div>
    );
}

export default SpinnerMin;