
function GridContainer({col = 5, gap = 8, children}) {
    return (
        // <div className="grid grid-cols-5 gap-8>
        <div className={`grid grid-cols-${col} gap-${gap}`}>
            {children}
        </div>
    );
}
export default GridContainer;