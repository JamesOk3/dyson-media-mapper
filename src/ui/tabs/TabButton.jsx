
const activeClasses = 'text-primary border-primary';
const inactiveClasses = 'border-transparent';

/**
 * Renders a tab button component.
 *
 * @param {object} props - The properties passed to the component.
 * @param {number} props.openTab - The currently open tab.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.id - The unique identifier of the button.
 * @param {ReactNode} props.children - The content to be displayed inside the button.
 * @return {JSX.Element} The rendered tab button component.
 *
 * @author James M Kambanga
 * Date: April 26, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function TabButton({openTab, onClick, id, children}) {


    return (
        <button onClick={onClick}
              className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
                  openTab === Number(id) ? activeClasses : inactiveClasses
              }`}>
            {children}
        </button>
    );
}

export default TabButton;