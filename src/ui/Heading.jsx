
function Heading({title}) {
    return (
        <div className="border-b border-stroke py-4 mb-4 dark:border-strokedark">
            <h3 className="text-title-sm font-semibold text-black dark:text-white">
                {title}
            </h3>
        </div>
    );
}

export default Heading;