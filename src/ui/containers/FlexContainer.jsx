
function FlexContainer({children}) {
    return (
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
            {children}
        </div>
    );
}

export default FlexContainer;