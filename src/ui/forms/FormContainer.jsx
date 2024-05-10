/**
 * Renders a container for a form with specific styling.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be rendered inside the container.
 * @return {JSX.Element} The rendered form container.
 *
 * @author James M Kambanga
 * Date: March 29, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function FormContainer({children}) {
    return (
        <div className="p-7 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            {children}
        </div>
    );
}

export default FormContainer;