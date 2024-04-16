import Breadcrumb from "../ui/Breadcrumb.jsx";
import {Link} from "react-router-dom";


function Settings() {
    return (
        <>
            <Breadcrumb pageName="Settings"/>
            <div>
                <h1>Settings Page</h1>
                <Link to="/new-password">Reset Password</Link>
            </div>
        </>
    );
}

export default Settings;