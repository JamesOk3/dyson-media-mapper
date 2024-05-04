import Breadcrumb from "../ui/Breadcrumb.jsx";
import UserListItem from "../features/teams/UserListItem.jsx";


function Guests() {
    return (
        <>
            <Breadcrumb pageName="Guests"/>
            <div>
                <h1>Guests Page</h1>
            </div>
            <UserListItem/>
        </>

    );
}

export default Guests;