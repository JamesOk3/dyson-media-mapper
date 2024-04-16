import Breadcrumb from "../ui/Breadcrumb.jsx";
import {Outlet} from "react-router-dom";
import Row from "../ui/containers/Row.jsx";


function Events() {
    return (
        <Row>
            <Breadcrumb pageName="Events"/>

            <Outlet/>
        </Row>

    );
}

export default Events;