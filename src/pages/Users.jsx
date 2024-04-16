import Breadcrumb from "../ui/Breadcrumb.jsx";
import Row from "../ui/containers/Row.jsx";
import UserList from "../features/users/UserList.jsx";
import {Outlet} from "react-router-dom";

/**
 * A function that renders the Users component.
 *
 * @return {JSX.Element} The Users component with Breadcrumb and CreateUser components.
 *
 * @author James M Kambanga
 * Date: April 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Users() {
    return (
        <Row>
            <Breadcrumb pageName="Users"/>
            <Outlet />
        </Row>

    );
}

export default Users;