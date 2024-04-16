import Icons from "../Icons.jsx";

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