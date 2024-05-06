import Breadcrumb from "../ui/Breadcrumb.jsx";
import {Outlet} from "react-router-dom";


function Bookings() {
    return (
        <>
            <Breadcrumb pageName="Product Requests" />
            <Outlet />

        </>
    );
}

export default Bookings;