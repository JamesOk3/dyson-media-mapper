import Icons from "../Icons.jsx";

/**
 * Renders a search bar component with children elements.
 *
 * @param {Object} children - The child elements to be rendered inside the search bar.
 * @return {JSX.Element} The rendered search bar component.
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function SearchBar({children}) {
    return (
        <div className="hidden sm:block">
            <form>
                <div className="relative bg-gray-200">
                    <div className="absolute left-4.5 top-1/2 -translate-y-1/2">
                        <Icons id="search-icon" width="20" height="20" viewBox="0 0 20 20"/>
                    </div>

                    {children}
                </div>
            </form>
        </div>
    );
}

export default SearchBar;