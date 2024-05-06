
/**
 * Function component for a general container with styling.
 *
 * @param {Object} children - The children components to be rendered inside the container.
 * @param {string} className - Additional class name for custom styling.
 * @return {JSX.Element} The styled container element with children.
 *
 * @author James M Kambanga
 * Date: March 29, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function GeneralContainer({children, className}) {
    const styles = `p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${className ? className : ''}`


    return (
        <div className={styles}>
            {children}
        </div>
    );
}

export default GeneralContainer;