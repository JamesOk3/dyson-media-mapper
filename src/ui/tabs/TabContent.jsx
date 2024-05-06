
/**
 * Renders the content of a tab based on the provided props.
 *
 * @param {object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The main content to be displayed based on the tab.
 * @param {number} props.openTab - The currently open tab.
 * @param {string} props.id - The unique identifier of the tab.
 * @return {JSX.Element} The rendered tab content.
 *
 * @author James M Kambanga
 * Date: April 26, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function TabContent({children, openTab, id}) {
    return (
        <div className={`leading-relaxed ${openTab === Number(id) ? 'block' : 'hidden'}`}>
            {children}
        </div>
    );
}

export default TabContent;