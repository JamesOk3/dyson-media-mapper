
function TabMenuContainer({children}) {
    return (
        <header className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
            {children}
        </header>
    );
}

export default TabMenuContainer;