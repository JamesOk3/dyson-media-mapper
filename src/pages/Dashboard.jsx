
import AdminDashboard from "../features/dashboard/admin/AdminDashboard.jsx";
import {useUser} from "../features/auth/hooks/useUser.js";
import TeamDashboard from "../features/dashboard/team/TeamDashboard.jsx";
/**
 * A function that renders the Dashboard for users .
 *
 * @return {JSX.Element} This component will strictly be used for the Dashboard
 *
 * @author Hiruy Alemseged
 * Date: April 3rd, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function Dashboard() {
    const {appRole} = useUser();

    return (
        appRole === "admin" ? <AdminDashboard/> :
       <TeamDashboard/>
    )
}
export default Dashboard;