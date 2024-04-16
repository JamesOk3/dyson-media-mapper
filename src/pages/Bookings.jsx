import Breadcrumb from "../ui/Breadcrumb.jsx";
import {Outlet} from "react-router-dom";


function Bookings() {
    return (
        <>
            <Breadcrumb pageName="Bookings" />
            <Outlet />

        </>
    );
}

export default Bookings;