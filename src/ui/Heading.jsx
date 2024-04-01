
function Heading({title}) {
    return (
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
                {title}
            </h3>
        </div>
    );
}

export default Heading;