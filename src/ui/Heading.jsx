
/**
 * Render a heading component with a specified title.
 *
 * @param {Object} title - The title to be displayed in the heading.
 * @param {string} as - The type of heading element to render.
 * @return {JSX.Element} The heading component JSX element.
 *
 * @author James M Kambanga
 * Date: March 30, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function Heading({title, as}) {
    return (
        <div className="border-b border-stroke py-4 mb-4 dark:border-strokedark">
            <h3 className="text-title-sm font-semibold text-black dark:text-white">
                {title}
            </h3>
        </div>
    );
}

export default Heading;