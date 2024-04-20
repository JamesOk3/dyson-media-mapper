import Breadcrumb from "../ui/Breadcrumb.jsx";
import {Outlet} from "react-router-dom";

function Events() {
    return (
        <>
            <Breadcrumb pageName="Events"/>
            <Outlet/>
        </>

    );
}

export default Events;