
/**
 * Function component for creating a flexible container.
 *
 * @param {object} children - The children elements to be rendered inside the flex container.
 * @return {JSX.Element} The flex container element with the children inside.
 *
 * @author James M Kambanga
 * Date: March 29, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function FlexContainer({children}) {
    return (
        <div className="mb-5.5 flex flex-col gap-5.5 md:flex-row">
            {children}
        </div>
    );
}

export default FlexContainer;