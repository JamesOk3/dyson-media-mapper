
function GridItem({children, ...props}) {
    return (
        // <div className="col-span-5 xl:col-end-3">
        <div {...props}>
            {children}
        </div>
    );
}


export default GridItem;