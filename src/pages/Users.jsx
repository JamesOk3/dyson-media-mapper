import Breadcrumb from "../ui/Breadcrumb.jsx";
import CreateUser from "../features/users/CreateUser.jsx";
import Row from "../ui/containers/Row.jsx";

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
            <CreateUser />
        </Row>

    );
}

export default Users;