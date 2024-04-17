
/**
 * Row component that that sets a maximum width and center aligns its children.
 *
 * @param {object} children - The elements to be displayed within the row.
 * @return {JSX.Element} - A div element displaying the children.
 *
 * @author James M Kambanga
 * Date: April 2, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function Row({children}) {
    return (
        <div className="mx-auto max-w-270">
            {children}
        </div>
    );
}

export default Row;