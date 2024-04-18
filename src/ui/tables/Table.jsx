import {createContext} from "react";
import Empty from "../Empty.jsx";

/**
 * Creates a reusable compound component that renders a table with the given children.
 *
 * @param {Object} children - the children components to be rendered inside the table
 * @return {JSX.Element} the Table component
 *
 * @author James M Kambanga
 * Date: April 12, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

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

/**
 * Renders the table Header component with a specific grid layout.
 *
 * @param {Object} children - The children elements to be rendered inside the Header component.
 * @return {JSX.Element} The Header component with the specified grid layout.
 */
function Header({children}) {
    // const {cols, xlCols, smCols} = useContext(TableContext);
    return (
        // <div role="row" className={`grid grid-cols-${cols} rounded-sm bg-gray dark:bg-meta-4 sm:grid-cols-${smCols} xl:grid-cols-${xlCols}`}>
        <div role="row" className={`grid grid-cols-[75%_25%] rounded-sm bg-gray dark:bg-meta-4 sm:grid-cols-[40%_20%_25%_15%] xl:grid-cols-[30%_25%_15%_20%_10%]`} >
            {children}
        </div>
    );
}

/**
 * Renders a table body component .
 *
 * @param {object} data - The data to be used to generate the body.
 * @param {function} render - The function used to render each item in the data.
 * @return {JSX.Element} The JSX element representing the body.
 *
 * @author James M Kambanga
 * Date: April 12, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function Body({data, render}) {
    if(!data) return <Empty >No data to show at the moment</Empty>;
    return (
        <div>
            {data.map(render)}
        </div>
    )
}

/**
 * Component for rendering a row in a table with a specific grid layout.
 *
 * @param {Object} children - The children components to be rendered within the row.
 * @return {JSX.Element} The JSX element representing the row.
 */
function Row({children}) {
    // const {cols, xlCols, smCols} = useContext(TableContext);
    return (
        // <div role="row" className={`grid grid-cols-${cols} rounded-sm hover:bg-gray-2 dark:bg-meta-4 sm:grid-cols-${smCols} xl:grid-cols-${xlCols} border-b border-stroke dark:border-strokedark`}>
        <div role="row" className={`grid grid-cols-[75%_25%] rounded-sm hover:bg-gray-2 dark:bg-meta-4 border-b border-stroke dark:border-strokedark sm:grid-cols-[40%_20%_25%_15%] xl:grid-cols-[30%_25%_15%_20%_10%] items-center`}>
            {children}
        </div>
    )
}

/**
 * Renders data for each header column.
 *
 * @param {Object} children - The content to be displayed in the header.
 * @param {string} theadStyles - Additional styles to apply to the header row.
 * @return {JSX.Element} The header row component.
 *
 */
function Thead({children, theadStyles = ""}) {
    return (
        <div className={`p-2.5 xl:p-4 ${theadStyles}`}>
            <h5 className="text-sm font-bold uppercase xsm:text-base">
                {children}
            </h5>
        </div>
    );
}

/**
 * Renders table data in each row in a table body.
 *
 * @param {object} children - The children elements to be rendered inside the div.
 * @param {element} graphic - Optional graphic element to be displayed alongside the children.
 * @param {string} tdataStyles - Additional styles to be applied to the div.
 * @return {JSX.Element} The styled div element containing children and graphic, if any.
 */
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