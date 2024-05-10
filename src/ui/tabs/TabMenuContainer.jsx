/**
 * Renders a container for a tab menu with specific styling.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be rendered inside the container.
 * @return {JSX.Element} The rendered tab menu container.
 *
 * @author James M Kambanga
 * Date: May 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function TabMenuContainer({children}) {
    return (
        <header className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
            {children}
        </header>
    );
}

export default TabMenuContainer;