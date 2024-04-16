import {createContext, useContext} from "react";
import Empty from "../Empty.jsx";


const TableContext = createContext();

function Table( {children, cols, xlCols, smCols} ) {
    return (
        <TableContext.Provider value={{cols, xlCols, smCols}}>
            <div role="table" className="flex flex-col justify-center">
                {children}
            </div>
        </TableContext.Provider>
    )
}

function Header({children}) {
    // const {cols, xlCols, smCols} = useContext(TableContext);
    return (
        // <div role="row" className={`grid grid-cols-${cols} rounded-sm bg-gray dark:bg-meta-4 sm:grid-cols-${smCols} xl:grid-cols-${xlCols}`}>
        <div role="row" className={`grid grid-cols-[75%_25%] rounded-sm bg-gray dark:bg-meta-4 sm:grid-cols-[40%_20%_25%_15%] xl:grid-cols-[30%_25%_15%_20%_10%]`} >
            {children}
        </div>
    );
}

function Body({data, render}) {
    if(!data) return <Empty >No data to show at the moment</Empty>;
    return (
        <div>
            {data.map(render)}
        </div>
    )
}

function Row({children}) {
    // const {cols, xlCols, smCols} = useContext(TableContext);
    return (
        // <div role="row" className={`grid grid-cols-${cols} rounded-sm hover:bg-gray-2 dark:bg-meta-4 sm:grid-cols-${smCols} xl:grid-cols-${xlCols} border-b border-stroke dark:border-strokedark`}>
        <div role="row" className={`grid grid-cols-[75%_25%] rounded-sm hover:bg-gray-2 dark:bg-meta-4 border-b border-stroke dark:border-strokedark sm:grid-cols-[40%_20%_25%_15%] xl:grid-cols-[30%_25%_15%_20%_10%]`}>
            {children}
        </div>
    )
}

function Thead({children, theadStyles = ""}) {
    return (
        <div className={`p-2.5 xl:p-4 ${theadStyles}`}>
            <h5 className="text-sm font-bold uppercase xsm:text-base">
                {children}
            </h5>
        </div>
    );
}

function Tdata({children, graphic, tdataStyles = ""}) {
    return (
        <div className={`flex items-center gap-3 p-2.5 sm:p-5 ${tdataStyles}`}>
            {graphic}
            <p className=" font-medium text-black dark:text-white">
                {children}
            </p>
        </div>
    );
}

function Footer() {
}


Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;
Table.Thead = Thead;
Table.Tdata = Tdata;

export default Table;