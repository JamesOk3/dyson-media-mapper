import { Link } from "react-router-dom";

/**
 * Renders a breadcrumb component with a page name and a navigation path.
 *
 * @param {Object} props - The properties for the breadcrumb component.
 * @param {string} props.pageName - The name of the current page.
 * @return {JSX.Element} The rendered breadcrumb component.
 *
 * @author James M Kambanga
 * Date: March 30, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Breadcrumb({ pageName }) {
    return (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                {pageName}
            </h2>

            <nav>
                <ol className="flex items-center gap-2">
                    <li>
                        <Link className="font-medium" to="/dashboard">
                            Dashboard /
                        </Link>
                    </li>
                    <li className="font-medium text-primary">{pageName}</li>
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrumb;