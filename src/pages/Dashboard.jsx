import AdminDashboard from "../features/dashboard/admin/AdminDashboard.jsx";
import {useUser} from "../features/auth/hooks/useUser.js";
import TeamDashboard from "../features/dashboard/team/TeamDashboard.jsx";

function Dashboard() {
    const {appRole} = useUser();

    return (
        appRole === "admin" ? <AdminDashboard/> :
       <TeamDashboard/>
    )
}
export default Dashboard;