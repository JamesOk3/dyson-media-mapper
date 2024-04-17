
/**
 * A component that represents a flexible item in a FlexContainer.
 *
 * @param {Object} children - The child elements to be rendered inside the FlexItem.
 * @return {JSX.Element} The JSX element representing the FlexItem.
 *
 * @author James M Kambanga
 * Date: March 29, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function FlexItem({children}) {
    return (
        <div className="w-full md:w-1/2">
            {children}
        </div>
    );
}

export default FlexItem;