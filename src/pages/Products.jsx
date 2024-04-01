import Breadcrumb from "../ui/Breadcrumb.jsx";
import {Outlet} from "react-router-dom";


function Products() {
    return (
        <>
            <Breadcrumb pageName="Products"/>
            <Outlet />
        </>

    );
}

export default Products;