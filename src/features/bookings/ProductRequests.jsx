
import {useUser} from "../auth/hooks/useUser.js";
import TeamRequests from "./team/TeamRequests.jsx";
import HandleRequests from "./admin/HandleRequests.jsx";

/**
 * Renders the ProductRequests component containing tabs options.
 *
 * @return {JSX.Element} The rendered ProductRequests component.
 *
 * @author James M Kambanga
 * Date: April 26, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function ProductRequests() {
    const { appRole: role } = useUser();
    return (
        <>
            {role === 'admin' ? <HandleRequests /> : <TeamRequests role={role}/>}
        </>
    );
}

export default ProductRequests;