
/**
 * Create a grid item component to be rendered inside a grid container.
 *
 * @param {Object} children - The children elements to be rendered inside the grid item.
 * @param {Object} props - Additional props to be spread on the div element.
 * @return {JSX.Element} The grid item component.
 *
 * @author James M Kambanga
 * Date: March 28, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function GridItem({children, ...props}) {
    return (
        <div {...props}>
            {children}
        </div>
    );
}


export default GridItem;