import Heading from "../ui/Heading.jsx";
import Row from "../ui/containers/Row.jsx";
import UpdateUserForm from "../features/users/UpdateUserForm.jsx";
import ChangePassword from "../features/auth/ChangePassword.jsx";
import Breadcrumb from "../ui/Breadcrumb.jsx";

function Account() {
    return (
        <>
            <Breadcrumb pageName="Bookings" />
            <Row>
                <Heading title="Account information" />
                <UpdateUserForm/>
            </Row>
            <Row>
                <ChangePassword/>
            </Row>
        </>
    );
}

export default Account;