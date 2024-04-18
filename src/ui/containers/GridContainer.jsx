
/**
 * GridContainer functional component.
 *
 * @param {object} col - number of columns
 * @param {number} gap - gap between grid items
 * @param {any} children - nested components
 * @return {JSX.Element} JSX element representing the grid container
 *
 * @author James M Kambanga
 * Date: March 28, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function GridContainer({col = 5, gap = 8, children}) {
    return (
        <div className={`grid grid-cols-${col} gap-${gap}`}>
            {children}
        </div>
    );
}
export default GridContainer;