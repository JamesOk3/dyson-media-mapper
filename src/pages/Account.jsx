import Heading from "../ui/Heading.jsx";
import Row from "../ui/containers/Row.jsx";
import UpdateUserForm from "../features/users/UpdateUserForm.jsx";
import ChangePassword from "../features/auth/ChangePassword.jsx";
import Breadcrumb from "../ui/Breadcrumb.jsx";

/**
 * Function to render the Account component.
 *
 * @return {JSX.Element} The Account component JSX
 *
 * @author James M Kambanga
 * Date: April 14, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Account() {
    return (
        <>
            <Breadcrumb pageName="Account" />
            <Row>
                <Heading title="Your information" />
                <UpdateUserForm/>
            </Row>
            <Row>
                <ChangePassword/>
            </Row>
        </>
    );
}

export default Account;